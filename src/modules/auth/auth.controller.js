const users = [
    { id: 1, username: 'edivan', password: '123456', role: 'admin' },
    { id: 2, username: 'gisele', password: '654321', role: 'standard' }
];

module.exports = {
    showLoginPage: (req, res) => {
        res.render('login');
    },

    login: (req, res, next) => {
        try {
            const { username, password } = req.body;

            const user = users.find(user => user.username === username);

            if (!user) {
                req.flash('warning', 'Invalid user');
                return res.redirect('/auth/login');
            }

            if (user.password !== password) {
                req.flash('warning', 'Invalid password');
                return res.redirect('/auth/login');
            }

            req.session.user = { id: user.id, username: user.username, role: user.role };

            res.redirect('/dashboard');
        } catch (error) {
            next(error)
        }

    },

    logout: (req, res, next) => {
        req.session.destroy(() => {
            res.redirect('/auth/login');
        });
    }
};