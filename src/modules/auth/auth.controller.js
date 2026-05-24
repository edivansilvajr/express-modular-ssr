const users = [{ username: 'edivan', password: '123456' }];

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

            req.session.user = user;

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