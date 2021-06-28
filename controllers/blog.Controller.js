const db = require("../config/db.config.js")
const pool = db()

//Get all blogs
exports.getAllBlogs = async function (req, res) {
  await pool
    .query("SELECT * FROM blogs")
    .then((result) => {
      res.status(200).send(result.rows)
    })
    .catch((e) => {
      res
        .status(500)
        .send(
          "We are experiencing some availability issues! Please check back later"
        )
    })
}

//Get a blog
exports.getBlogById = async function (req, res) {
  const id = req.params.id
  await pool
    .query("SELECT * FROM blogs WHERE id=$1", [id])
    .then((result) => {
      if (result.rows.length > 0) {
        res.status(200).send(result.rows[0])
      } else {
        res.status(200).send(`We could not find a blog with id of ${id}`)
      }
    })
    .catch((e) => {
      res
        .status(500)
        .send(
          "We are experiencing some availability issues! Please check back later"
        )
    })
}

//Post one blog
exports.postOneBlog = async function (req, res) {
  const { author, category, title, summary, content } = req.body
  const sql =
    "INSERT INTO blogs (category_id,author_id,title,summary,content) VALUES ($1,$2,$3,$4,$5) RETURNING id"
  const values = [author, category, title, summary, content]
  await pool
    .query(sql, values)
    .then((result) => {
      res.send(`Blog with id of ${result.rows[0].id} successfully saved`)
    })
    .catch((e) => {
      res.send("Problem posting the blogs")
    })
}

//Update a blog
exports.updateOneBlog = async function (req, res) {
  const id = req.params.id
  const { author, category, title, summary, content } = req.body
  const values = [
    parseInt(author),
    parseInt(category),
    title,
    summary,
    content,
    parseInt(id),
  ]
  const sql = `UPDATE blogs 
    SET author_id=$1, category_id=$2, title = $3, summary = $4, content = $5 
    WHERE id = $6 
    RETURNING id`
  await pool
    .query(sql, values)
    .then((result) => {
      res.send(`Blog with id of ${result.rows[0].id} successfully updated`)
    })
    .catch((e) => {
      res.send("Problem updating the blog")
    })
}
