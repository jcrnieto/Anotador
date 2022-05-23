//import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Menu from './components/NavBar'
import { Container} from '@mui/material'

function App() {
  return (

    <BrowserRouter>
    <Menu/>
    <div>
      <Container>
       <Routes>
           <Route path='/' element={<TaskList/>}/>
           <Route path='/task/new' element={<TaskForm/>}/>
           <Route path='/task/:id/edit' element={<TaskForm/>}/>
       </Routes>
       </Container>
       </div>
       </BrowserRouter>
  );
}

export default App;
