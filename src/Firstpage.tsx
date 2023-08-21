
import { TextField, Button, Container, Typography} from '@mui/material';


import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
const FirstPage=()=>{
  const navigate=useNavigate()
  const gotoSecondpage=()=>{
  navigate('/Secondpage')
    }
  
  
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
      });   

    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = event.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
     }));
  };
  const [formValid, setFormValid] = useState(true);
  useEffect(() => {
    
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));

    }
  }, []);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  
    const fieldsNotEmpty = Object.values(formData).every((value) => value.trim() !== '');

    if (fieldsNotEmpty) {
    
      localStorage.setItem('formData', JSON.stringify(formData));
      
      alert('Form data saved to local storage!');
      gotoSecondpage()
    } else {
      setFormValid(false); 
    }
  };
    
return (
        
    <Container maxWidth="sm">
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      {!formValid && (
          <Typography color="error" variant="caption">
            Please fill in all fields.
          </Typography>
        )}
      
      <Button type="submit" variant="contained" color="primary"  >
    
        Submit
      </Button>
    </form>
  </Container>    
        )
}
export default FirstPage
