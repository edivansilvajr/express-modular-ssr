const { Router } = require('express');
const dashboardController = require('./dashboard.controller');
const { isAuthenticated, isAuthorized } = require('../../middlewares/auth.middleware');

const router = Router();

router.get('/dashboard', isAuthenticated, dashboardController.showDashboard);
router.get('/dashboard/users', isAuthenticated, isAuthorized, dashboardController.users);

module.exports = router;