const { Router } = require('express');
const authController = require('./auth.controller');
const authValidation = require('./auth.validation');
const router = Router();

// Login
router.get('/auth/login', authController.showLoginPage);
router.post('/auth/login', authValidation.login, authController.login);

// Logout
router.post('/auth/logout', authController.logout);

module.exports = router;