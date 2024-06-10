const express = require('express');
const router = express.Router();
const path = require('path');

function createpath(page) {
    return path.resolve(__dirname, `${page}.html`);
}

router.get('/', (req, res) => {
    res.sendFile(createpath("index"));
})

module.exports = router;