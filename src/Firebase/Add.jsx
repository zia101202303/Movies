import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import HamburgerNavbar from '../components/navbar/Navbar';
import React from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDijCwHryPdti4Cam4CHUcKLq4JgPpNW0E",
  authDomain: "adddata-3a2b3.firebaseapp.com",
  databaseURL: "https://adddata-3a2b3-default-rtdb.firebaseio.com",
  projectId: "adddata-3a2b3",
  storageBucket: "adddata-3a2b3.appspot.com",
  messagingSenderId: "663933625151",
  appId: "1:663933625151:web:e070a215024aa8fb06298a",
  measurementId: "G-MLXB82CW72"
};
const app = initializeApp(firebaseConfig);


function WriteUserData() {




  const [movieName, setMovieName] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieUrl, setMovieUrl] = useState('');
  const [movieNumber, setMovieNumber] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default behavior of form submission
    event.preventDefault();
    
    // Log the values of all input fields
    console.log('Movie Name:', movieName);
    console.log('Movie Description:', movieDescription);
    console.log('Movie Url:', movieUrl);
    console.log('Movie Number:', movieNumber);


    const db = getDatabase(app);
    set(ref(db, 'data/'+movieNumber), {
      MovieName: movieName,
      MovieDescription: movieDescription,
      MovieUrl: movieUrl,
      NO:movieNumber
    });

    // You can perform further actions here, such as sending the data to a server
  };

  return (
<><HamburgerNavbar />

    <div  className='formUIContainer'>
      <div className='formui'>
        <h1 className='formui12 whitecolor'>Add Your OWn Movie</h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='whitecolor'>Movie Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Movie Name" 
          value={movieName} 
          onChange={(e) => setMovieName(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='whitecolor'>Movie Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Movie Description" 
          value={movieDescription} 
          onChange={(e) => setMovieDescription(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='whitecolor'>Movie Url</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Movie Url" 
          value={movieUrl} 
          onChange={(e) => setMovieUrl(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='whitecolor'>Movie Number</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Movie Number" 
          value={movieNumber} 
          onChange={(e) => setMovieNumber(e.target.value)} 
        />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </>
  );
}

export default WriteUserData;