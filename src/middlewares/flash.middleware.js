module.exports = (req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.warning = req.flash("warning");
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");

    next();
};