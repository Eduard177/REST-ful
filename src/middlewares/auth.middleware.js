const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

module.exports = function(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        const err = new Error();
        err.message = "Token must be sent";
        err.status = 400;
        throw err
    }
    jwt.verify(token, JWT_SECRET, function(err, decodedToken) {
        if (err) {
            const err = new Error();
            err.message = "Invalid token";
            err.status = 400;
            throw err
        }

        req.user = decodedToken.user;
        next();
    })
}