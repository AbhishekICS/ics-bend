require("dotenv").config();
const express = require("express");
const app = express();
const indexRoute = require('./src/route/index')
const cors = require('cors');
const connectDB = require("./src/config/db");
const morgan = require('morgan')

connectDB()
  
app.use(cors())
app.use(express.json())

// app.use((req, res, next)=>{
//   console.log(`Method : ${req.method} || url : ${req.url} | ${res.elapsedTime}`);
//   next()
// })

app.use(morgan(`method: :method, url: :url, response-time: :response-time ms`))
app.use('/api', indexRoute)

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(` server is running on ${PORT}`);
});
