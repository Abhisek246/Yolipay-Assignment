const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    name: String,
    address: String,
    title: String,
    description: String,
    image: String
  });
  

  const Portfolio = mongoose.model('Portfolio', portfolioSchema);

  module.exports = Portfolio;