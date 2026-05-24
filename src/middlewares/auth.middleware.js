const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    next();
};

const isAuthorized = (req, res, next) => {
    const user = req.session.user;
    if (user.role !== 'admin') {
        return res.redirect('/dashboard');
    }
    next();
};

module.exports = {   
    isAuthenticated,
    isAuthorized
};  