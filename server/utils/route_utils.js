// Standardized route error handler
function attempt(res, route) {
    try{
        route();
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { attempt };