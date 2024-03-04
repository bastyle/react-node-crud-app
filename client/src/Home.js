import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
//import { Link } from 'react-router-dom';

export default function () {
    const BASE_URL = 'http://localhost:5000/api/students';
    const fetchFromAPI = (endpoint, options) => fetch(`${BASE_URL}${endpoint}`, options);
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    useEffect(() => {
        // Fetch students data from the API and update the state

        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        // Display a confirmation popup model
        const confirmDelete = window.confirm('You are about to delete a student record. Are you sure?');
        if (confirmDelete) {
            try {
                // Send a DELETE request to the API
                await fetch(`${BASE_URL}/${id}`, {
                    method: 'DELETE',
                });
                // Update the students list after successful deletion
                setStudents(students.filter((student) => student.id !== id));
                fetchStudents();
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };



    const handleUpdate = async (student) => {
        try {
            const response = await fetch(`${BASE_URL}/${student.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
            if (response.ok) {
                // Update the students list after successful update
                setStudents(students.map((s) => (s.id === student.id ? student : s)));
                fetchStudents();
            } else {
                console.error('Error updating student:', response.status);
            }
        } catch (error) {
            console.error('Error updating student:', error);
        }
    }

    const handleFind = async () => {
        try {
            const studentId = document.querySelector('input[type="text"]').value;
            if (studentId.trim() === '') {
                alert('Please enter a student number');
                return;
            }
            
            const response = await fetch(`${BASE_URL}/${studentId}`);
            const data = await response.json();
            if (response.ok) {
                // Update the students list with the found student      
                setStudents([data]);
            } else {
                console.error('Error finding student:', response.status);
                alert('Student not found!');
            }
        } catch (error) {
            console.error('Error finding student:', error);
        }
        
    };



    const handleNavigateToAbout = () => {
        navigate('/addUpt');
    };

    return (
        <div className="container">
            <h1>Student List</h1>

            <table>
                <tr>
                    <td >
                        <div className="input-container">
                            <button className="button" onClick={handleNavigateToAbout}>Add new student!</button>
                        </div>
                    </td>

                    <td className='td' >
                        <div className="input-container">
                            <input className="input-find" type="text" placeholder="Enter student Number" />
                            <button className="button button-find" onClick={handleFind}>Find</button>
                        </div>
                    </td>

                    
                    <td className='td' >
                        <div className="input-container">
                            <button className="button button-refresh" onClick={() => fetchStudents()}>Refresh List</button>
                        </div>
                    </td>
                
                    
                </tr>
            </table>



            <table className="students-table">
                <thead>
                    <tr>
                        <th>Student Number</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Program</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{student.studentNumber}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.address} </td>
                            <td>{student.city} </td>
                            <td>{student.program}</td>
                            <td>
                                <button className="button button-update" onClick={() => handleUpdate(student)}>Update</button>
                                <button className="button button-delete" onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};