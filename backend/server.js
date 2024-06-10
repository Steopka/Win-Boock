const express = require('express');
const app = express();
const router = require('./routing')

app.listen(3000, (err, res) => {
    if (err != null) {
        console.log(err);
    }
    console.log("Done!");
})

app.use(router);