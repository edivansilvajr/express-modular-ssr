module.exports = {
    showDashboard: (req, res) => {
        res.render('dashboard');    
    },

    users: (req, res) => {
        console.log('User list accessed');
        res.render('users');
    }
};