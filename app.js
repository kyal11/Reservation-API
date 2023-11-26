const express = require("express");
const dotenv = require("dotenv");

dotenv.config()


const app = express()
const port = process.env.APP_PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
});
