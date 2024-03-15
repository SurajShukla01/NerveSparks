// errorHandler.js
const handleAsync = (fn) => (req, res, next) => {
    console.log("start",fn);
    Promise.resolve(fn(req, res, next))
        .catch((err) => {
            console.error('Error in request:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports = { handleAsync };
