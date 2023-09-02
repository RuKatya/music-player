const express = require("express")
const app = express()
const PORT = process.env.PORT || 5050

app.use(express.static("../client/build"))

app.get("/")
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})