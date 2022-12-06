var mongoose = require("mongoose");
var Employee = require("../model/Employee");
var employeeController = {};
employeeController.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/index", {employees: employees});
      }
    });
  };
  
  employeeController.show = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/show", {employees: employee});
      }
    });
  };
  employeeController.create = function(req, res){
     res.render("../views/create");


     
             
 }
      

      
  

  employeeController.save = function(req, res) {
    var employee = new Employee(req.body);
  
    employee.save(function(err) {
      if(err) {
        console.log(err);
        res.render("create");
      } else {
        console.log("Successfully created an employee.");
        res.redirect("/show"+`/${employee._id}`);
      }
    });
  };
  employeeController.edit = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("edit", {employee: employee});
      }
    });
  };
  employeeController.update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
      if (err) {
        console.log(err);
        res.render("edit", {employee: req.body});
      }
      res.redirect("/");
    });
  };
  employeeController.delete = function(req, res) {
    Employee.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Employee deleted!");
        res.redirect("/");
      }
    });
  };
  module.exports =employeeController;