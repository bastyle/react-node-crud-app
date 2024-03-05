const {
    addStudent,
    deleteStudent,
    getAllStudents,
    getByStudentNumber,
    updateByStudentNumber
  } = require("../controller/studentController");
  
  const router = require("express").Router();
  
  
  router.post("/", addStudent);
  router.delete("/:id", deleteStudent);
  router.get("/", getAllStudents);
  router.get("/:studentNumber", getByStudentNumber);
  router.put("/:studentNumber", updateByStudentNumber);
  
  
  module.exports = router;