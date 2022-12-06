var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");
// Get all employees


// Get single employee by id
router.get('/show/:id', employee.show);

router.get("/main",(req,res)=>{
   res.render("main")
})
router.get('/', employee.list);
// Create employee
router.get('/create', employee.create); 

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);

module.exports = router;