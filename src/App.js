import React from "react";
import {Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from "./components/ExerciseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <Box width={"400px"}  m="Auto" className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
