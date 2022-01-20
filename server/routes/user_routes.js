const router = require('express').Router();
const { attempt } = require('../utils/route_utils');

router.get('/', async (req, res) => {
    await attempt((res), () => {
        res.status(200).json("Success!");
    });
})

module.exports = router;