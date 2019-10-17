const router = require('express').Router();
const Tweet = require('../../data/helpers/tweetDb');

router.get('/', async (req, res) => {
    try {
        const tweets = await Tweet.find();
        res.json(tweets)
    } catch (e) { res.sendStatus(500); }
});

module.exports = router;