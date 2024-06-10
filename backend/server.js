const express = require('express');
const app = express.app;

app.listen(PORT, (err, res) => {
    if (err != null) {
        console.log(err);
    }
    console.log("Done!");
})