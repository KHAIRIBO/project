import React from 'react';
import { Download, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const downloadedTools = [
    { title: 'SEO Optimizer Pro', date: 'Oct 12, 2023' },
    { title: 'Image Compressor API', date: 'Nov 05, 2023' },
  ];

  const serviceRequests = [
    { service: 'Web Development', status: 'In Progress', date: 'Nov 10, 2023' },
    { service: 'UI/UX Design', status: 'Completed', date: 'Sep 22, 2023' },
  ];

  return (
    <div className="py-10 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">User Dashboard</h1>
        <p className="text-textMuted">Manage your downloads and track your service requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Downloads */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Download size={20} />
            </div>
            <h2 className="text-2xl font-semibold">My Downloads</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {downloadedTools.map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">{tool.title}</h3>
                  <p className="text-sm text-textMuted">Downloaded on {tool.date}</p>
                </div>
                <button className="btn-secondary text-sm py-1.5 px-4">Download Again</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Service Requests */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/20 rounded-lg text-accent">
              <Clock size={20} />
            </div>
            <h2 className="text-2xl font-semibold">Service Requests</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {serviceRequests.map((req, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">{req.service}</h3>
                  <p className="text-sm text-textMuted">Requested on {req.date}</p>
                </div>
                <div>
                  {req.status === 'Completed' ? (
                    <span className="flex items-center gap-1 text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      <CheckCircle size={14} /> Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-sm font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                      <Clock size={14} /> In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
