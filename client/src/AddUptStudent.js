import React, { useState, useEffect } from 'react';
import './AddUptStudent.css';
import { Link, useNavigate } from 'react-router-dom';

const StudentForm = ({ onSubmit, onCancel, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    // If initialValues is provided, update the form data when it changes
    console.log('initialValues:', initialValues)
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);


  const handleCancel = () => {
    // Optionally reset form data or perform other actions before hiding the form
    setFormData({});
    onCancel();
  };

  return (
    <div className='container'> 
      <form onSubmit={handleSubmit} className="student-form">
            <label className="form-label">
              Student Number:
              <input type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              First Name:
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Last Name:
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
            </label>      
            <label className="form-label">
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              City:
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Phone Number:
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Email:
              <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-input" />
            </label>
            <label className="form-label">
              Program:
              <input type="text" name="program" value={formData.program} onChange={handleChange} className="form-input" />
            </label>
            <button type="submit" className="submit-button">Submit</button>
            <button type="submit" className="submit-button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default StudentForm;
