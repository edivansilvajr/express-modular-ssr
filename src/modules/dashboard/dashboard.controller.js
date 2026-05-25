module.exports = {
    showDashboard: (req, res) => {
        res.render('dashboard');    
    },

    users: (req, res) => {
        res.render('users');
    }
};