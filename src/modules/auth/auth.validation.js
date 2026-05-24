module.exports = {
    login: (req, res, next) => {
        const { username, password } = req.body;

        if (!username || username.trim() === '') {
            req.flash('warning', 'Username é obrigatório');
        } else if (username.length < 3) {
            req.flash('warning', 'Username deve ter no mínimo 3 caracteres');
        } else if (username.length > 50) {
            req.flash('warning', 'Username deve ter no máximo 50 caracteres');
        }

        if (!password || password.trim() === '') {
            req.flash('warning', 'Senha é obrigatória');
        } else if (password.length < 6) {
            req.flash('warning', 'Senha deve ter no mínimo 6 caracteres');
        } else if (password.length > 128) {
            req.flash('warning', 'Senha deve ter no máximo 128 caracteres');
        }

        next();
    }
};