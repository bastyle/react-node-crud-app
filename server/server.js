require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")
const studentModel = require('./models/studentModel');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json())
const port = process.env.PORT || 5000;


app.get('/api/health', (req, res) => {
  res.send('OK!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

  // Create a student
  app.post('/api/students', async (req, res) => {
    try {
      const student = await studentModel.create(req.body);
      console.log('Student created:', student);
      
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student:'+error });
    }
  });


  // Read all students
  app.get('/api/students', async (req, res) => {
    try {
      const students = await studentModel.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  });

  // Read a student by ID
  /*app.get('/api/students/:id', async (req, res) => {
    try {
      const student = await studentModel.findById(req.params.id);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch student' });
    }
  });*/
  app.get('/api/students/:studentNumber', async (req, res) => {
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
  });

  // Update a student by ID
  app.put('/api/students/:id', async (req, res) => {
    try {
      const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update student' });
    }
  });

  // Delete a student by ID
  app.delete('/api/students/:id', async (req, res) => {
    try {
      const student = await studentModel.findByIdAndDelete(req.params.id);
      if (student) {
        res.json({ message: 'Student deleted' });
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});