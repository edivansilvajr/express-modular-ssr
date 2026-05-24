const { Router } = require("express");

const authRouter = require('../modules/auth/auth.routes');
const dashboardRouter = require('../modules/dashboard/dashboard.routes');

const router = Router();

router.get('/', (req, res) => res.render('index'));

router.use(authRouter);
router.use(dashboardRouter);

module.exports = router;

