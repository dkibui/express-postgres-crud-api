const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3000

//

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, "public")))

app.use("/", require("./routes/home.Route.js"))
app.use("/test", require("./routes/test.Route.js"))
app.use("/blog", require("./routes/blog.Route.js"))

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})
