import React from "react";
import { Box, AppBar, Container, Toolbar, Typography, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar(){

    const navigate = useNavigate()
    return(
       <Box sx={{ flexGrow:1}}>
           <AppBar positions='static' color='transparent'>
               <Container>
                  <Toolbar>
                      <Typography variant ='h6' sx={{ flexGrow:1}}>
                          <Link to='/' style={{textDecoration:'none', color:'#eee'}}>
                          Pern stack
                          </Link>
                      </Typography>
                      <Button variant= 'contained' color= 'primary' onClick={()=> navigate('task/new')}>
                          New Stack
                      </Button>
                  </Toolbar>
               </Container>
           </AppBar>
       </Box>
    )
}