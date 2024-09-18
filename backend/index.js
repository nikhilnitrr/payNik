// imports
const express = require("express");
const cors = require("cors")
const app = express()
const PORT = 3000
const apiRouter = require("./routes/index")

// middlewares
app.use(cors())
app.use(express.json())
app.use("/api/v1", apiRouter)


// port binding
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

