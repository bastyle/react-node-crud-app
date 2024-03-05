const studentModel = require('../models/studentModel');
// Controller methods

// Create a new student
module.exports.addStudent = async (req, res) => {
    try {
        console.log('adding student...');
        const student = await studentModel.create(req.body);
        console.log('Student created:', student);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create student:' + error });
    }
}

// delete a student
module.exports.deleteStudent = async (req, res) => {
    try {
        console.log('deleting student...')
        const student = await studentModel.findByIdAndDelete(req.params.id);
        if (student) {
            res.json({ message: 'Student deleted' });
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete student' });
    }
}

// Get all students
module.exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch students' });
    }
}

// Get a student by studentNumber
module.exports.getByStudentNumber = async (req, res) => {
    try {
        //const student = await studentModel.findById(req.params.id);
        const student = await studentModel.findOne({ studentNumber: req.params.studentNumber });
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch student' });
    }
}

// Update a student by studentNumber
module.exports.updateByStudentNumber = async (req, res) => {
    try {
        //const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const student = await studentModel.findOneAndUpdate({ studentNumber: req.params.studentNumber }, req.body, { new: true });
        console.log('Student updated:', student);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update student' });
    }

}