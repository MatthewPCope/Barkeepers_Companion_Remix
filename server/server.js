const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config();
require('./config/mongoose.config.jsx')

app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin:'http://localhost:5173'}))
app.use(cookieParser())

const userRoutes = require('./routes/user.routes.jsx')
userRoutes(app)
const cocktailRoutes = require('./routes/cocktail.routes.jsx')
cocktailRoutes(app)


app.listen(8000, () => console.log("Crackalackin' at port 8000"))