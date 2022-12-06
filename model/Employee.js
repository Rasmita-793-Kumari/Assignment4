const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name: String,
    position: String,
    salary: Number,
    address: String,
    updated_at: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Employee', EmployeeSchema);


  