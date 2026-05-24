const { Router } = require('express');
const dashboardController = require('./dashboard.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const router = Router();

router.get('/dashboard',authMiddleware, dashboardController.showDashboard);

module.exports = router;