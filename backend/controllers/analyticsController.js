const Analytics = require('../models/Analytics');
const Tool = require('../models/Tool');
const ServiceRequest = require('../models/ServiceRequest');
const User = require('../models/User');

// Track an event
exports.trackEvent = async (req, res) => {
  try {
    const { eventType, toolId, serviceRequestId, pagePath } = req.body;
    
    const clientIp = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('user-agent');

    const analytics = new Analytics({
      eventType,
      userId: req.user ? req.user.id : null,
      toolId: toolId || null,
      serviceRequestId: serviceRequestId || null,
      pagePath: pagePath || null,
      userAgent,
      ipAddress: clientIp
    });

    await analytics.save();
    res.json({ message: 'Event tracked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get analytics dashboard data (admin only)
exports.getDashboardStats = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    // Get stats from last 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    // Total events
    const totalEvents = await Analytics.countDocuments({
      timestamp: { $gte: thirtyDaysAgo }
    });

    // Events by type
    const eventsByType = await Analytics.aggregate([
      {
        $match: { timestamp: { $gte: thirtyDaysAgo } }
      },
      {
        $group: {
          _id: '$eventType',
          count: { $sum: 1 }
        }
      }
    ]);

    // Daily analytics for last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const dailyStats = await Analytics.aggregate([
      {
        $match: { timestamp: { $gte: sevenDaysAgo } }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    // Total users
    const totalUsers = await User.countDocuments();

    // Total tools
    const totalTools = await Tool.countDocuments();

    // Total service requests
    const totalServiceRequests = await ServiceRequest.countDocuments();

    // Tool downloads
    const toolDownloads = await Analytics.aggregate([
      {
        $match: { 
          eventType: 'tool_download',
          timestamp: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: '$toolId',
          downloads: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'tools',
          localField: '_id',
          foreignField: '_id',
          as: 'tool'
        }
      },
      {
        $unwind: '$tool'
      },
      {
        $sort: { downloads: -1 }
      },
      {
        $limit: 5
      }
    ]);

    // Top pages
    const topPages = await Analytics.aggregate([
      {
        $match: { 
          pagePath: { $ne: null },
          timestamp: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: '$pagePath',
          visits: { $sum: 1 }
        }
      },
      {
        $sort: { visits: -1 }
      },
      {
        $limit: 5
      }
    ]);

    // Real-time active users (last hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const activeUsers = await Analytics.aggregate([
      {
        $match: { timestamp: { $gte: oneHourAgo } }
      },
      {
        $group: {
          _id: '$ipAddress'
        }
      },
      {
        $count: 'count'
      }
    ]);

    res.json({
      totalEvents,
      eventsByType,
      dailyStats,
      totalUsers,
      totalTools,
      totalServiceRequests,
      topToolDownloads: toolDownloads,
      topPages,
      activeUsersLastHour: activeUsers[0]?.count || 0
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get real-time events (last hour)
exports.getRealtimeEvents = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const events = await Analytics.find({
      timestamp: { $gte: oneHourAgo }
    })
      .sort({ timestamp: -1 })
      .limit(50)
      .lean();

    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
