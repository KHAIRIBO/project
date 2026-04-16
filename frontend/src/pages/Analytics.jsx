import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Download, FileText, Eye, TrendingUp, Activity, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Analytics() {
  const [stats, setStats] = useState(null);
  const [realtimeEvents, setRealtimeEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Not authenticated');
        return;
      }

      const [dashboardRes, realtimeRes] = await Promise.all([
        fetch('http://localhost:5000/api/analytics/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('http://localhost:5000/api/analytics/realtime', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!dashboardRes.ok || !realtimeRes.ok) {
        throw new Error('Failed to fetch analytics');
      }

      const dashboardData = await dashboardRes.json();
      const realtimeData = await realtimeRes.json();

      setStats(dashboardData);
      setRealtimeEvents(realtimeData);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
    const interval = setInterval(fetchAnalytics, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-textMuted">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 glass-panel max-w-md">
          <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Error Loading Analytics</h2>
          <p className="text-textMuted mb-4">{error}</p>
          <button 
            onClick={fetchAnalytics}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  // Prepare chart data
  const eventTypeData = stats.eventsByType.map(item => ({
    name: item._id.replace(/_/g, ' ').toUpperCase(),
    value: item.count
  }));

  return (
    <div className="py-10 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-textMuted">Real-time insights and website analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textMuted text-sm font-medium mb-2">Total Events (30d)</p>
              <p className="text-3xl font-bold">{stats.totalEvents.toLocaleString()}</p>
            </div>
            <Activity size={32} className="text-primary opacity-20" />
          </div>
        </motion.div>

        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textMuted text-sm font-medium mb-2">Active Users (1h)</p>
              <p className="text-3xl font-bold">{stats.activeUsersLastHour}</p>
            </div>
            <TrendingUp size={32} className="text-accent opacity-20" />
          </div>
        </motion.div>

        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textMuted text-sm font-medium mb-2">Total Users</p>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </div>
            <Users size={32} className="text-blue-500 opacity-20" />
          </div>
        </motion.div>

        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textMuted text-sm font-medium mb-2">Total Tools</p>
              <p className="text-3xl font-bold">{stats.totalTools}</p>
            </div>
            <Download size={32} className="text-green-500 opacity-20" />
          </div>
        </motion.div>

        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-textMuted text-sm font-medium mb-2">Service Requests</p>
              <p className="text-3xl font-bold">{stats.totalServiceRequests}</p>
            </div>
            <FileText size={32} className="text-yellow-500 opacity-20" />
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Event Types Pie Chart */}
        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Events by Type (30d)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {eventTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Daily Stats Line Chart */}
        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Daily Traffic (7d)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.dailyStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="_id" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Top Tools and Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Top Tools */}
        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6">Top Tools Downloaded</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.topToolDownloads}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis 
                dataKey="tool.title" 
                angle={-45}
                textAnchor="end"
                height={100}
                stroke="#6B7280"
              />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="downloads" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Pages */}
        <motion.div 
          className="glass-panel p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">Top Pages Visited</h2>
          <div className="space-y-3">
            {stats.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <span className="text-sm font-medium text-textMuted">{page._id}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary"
                      style={{ 
                        width: `${(page.visits / Math.max(...stats.topPages.map(p => p.visits))) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-primary min-w-12">{page.visits}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Real-time Events */}
      <motion.div 
        className="glass-panel p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-2xl font-bold mb-6">Real-time Events (Last Hour)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-textMuted">Event Type</th>
                <th className="text-left py-3 px-4 font-semibold text-textMuted">IP Address</th>
                <th className="text-left py-3 px-4 font-semibold text-textMuted">Page</th>
                <th className="text-left py-3 px-4 font-semibold text-textMuted">Time</th>
              </tr>
            </thead>
            <tbody>
              {realtimeEvents.slice(0, 10).map((event, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/50 transition">
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                      {event.eventType.replace(/_/g, ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-textMuted">{event.ipAddress}</td>
                  <td className="py-3 px-4 text-textMuted">{event.pagePath || '—'}</td>
                  <td className="py-3 px-4 text-textMuted">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
