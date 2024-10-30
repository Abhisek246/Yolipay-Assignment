const express = require('express');
const cors = require('cors');
const portfolioData = require('./data.js');
const Portfolio = require('./models/portfolioModel.js');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB");

    // Insert data if the collection is empty
    const count = await Portfolio.countDocuments();
    if (count === 0) {
      await Portfolio.insertMany(portfolioData);
      console.log("Inserted initial portfolio data");
    }
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
  


  app.get('/data', async (req,res)=>{
    try {
        const data = await Portfolio.find({});
        res.json({success:true,data});
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({success:false, message:"Error fetching data"});
      }
  });


app.listen('3000', ()=>{
    console.log('Server is listening')
})