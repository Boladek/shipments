module.exports = (req, res, next) => {
    const validationError = req.validationError;
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
    next();
};
