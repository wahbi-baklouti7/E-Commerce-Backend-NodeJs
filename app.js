
/**
 *  1.npm init -y : create package.json file with default structure.
 * 2. npm i express mongoose dotenv : install express mongoose dotenv
 * 3. create file .env and add PORT=3001
 * 4. create file app.js
 * 
 * 
 * ================ Type of Server =====================
 * Server Application: Backend => Business Logic 
 * Server Database: MongoDB /MySQL
 *  */





const express = require("express"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const categoriesRoute = require("./routes/categorie.route")
const sCategoriesRoute = require("./routes/scategorie.route")
const articleRoute = require("./routes/article.route")
dotenv.config()



const app = express() // create express app
app.use(express.json())
mongoose.connect(process.env.DB_CLOUD).then(() => console.log("Connected to MongoDB Cloud")).catch((err) => {
    console.log(err)
    process.exit()
})

app.use(express.json()) // for parsing application/json
 // load .env file


// Routes 
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/categories", categoriesRoute)
app.use("/api/scategories", sCategoriesRoute)
app.use("/api/articles",articleRoute)

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`)
}); // listen on port 3001






module.exports = app