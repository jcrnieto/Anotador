import React from 'react'
import{ Grid, Card, Typography, CardContent, TextField, Button, CircularProgress } from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function TaskForm(){

    const navigate = useNavigate()
    const params= useParams() //useParams nos trae informacion de la url que estamos llamando

    const [task, setTask]= useState({
        title:'',
        description:'',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const handleChange = (e) =>
       setTask({ ...task, [e.target.name]: e.target.value})
    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true)

        if(editing){
           const response = await fetch(`http://localhost:3002/tasks/${params.id}`,{
                method: 'PUT',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
        }else{
            await fetch('http://localhost:3002/tasks',{
                method:'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })

        }
         // const data = await res.json()
        //console.log(data)
        setLoading(false)
        navigate('/')
    }

    const loadTask= async (id) =>{
        const res= await fetch(`http://localhost:3002/tasks/${id}`) //me trae la informacion del back por medio del id
        const data = await res.json()
       // console.log(data)
       setTask({title: data.title, description: data.description})
       setEditing(true)
    }

    useEffect(()=>{ //uso el useEfect para traerme la info del back
      if(params.id){
          loadTask(params.id)
      }
    },[params.id])

    return(
        <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
       >
           <Grid item xs={3}>
               <Card sx={{mt: 5}} style={{
                   backgroundColor: '#1e272e',
                   padding:'1rem'
               }}>
                   <Typography variant='5' textAlign='center' color='white'>
                       {editing? 'Editar Tarea' : 'Agregar Tarea'}
                   </Typography>
                   <CardContent>
                       <form onSubmit={handleSubmit}>
                           <TextField
                           variant='filled'
                           label='titulo de la tarea'
                           sx={{
                               display: 'block',
                               margin: '.5rm 0'
                           }}
                           name= 'title'
                           value= {task.title}
                           onChange={handleChange}
                           InputProps={{style:{color:"white"}}}
                           InputLabelProps={{style:{color:"white"}}}
                           />

                           <TextField
                           variant='filled'
                           label='Escribe tu descripcion'
                           multiline
                           rows={4}
                           sx={{
                            display: 'block',
                            margin: '.5rm 0'
                        }}
                        name='description'
                        value= {task.description}
                        onChange={handleChange}
                        InputProps={{style:{color:"white"}}}
                        InputLabelProps={{style:{color:"white"}}}
                           />

                           <Button variant='contained' color='primary' type='submit' disabled={!task.title || !task.description}>
                              {
                              loading ? (<CircularProgress color='inherit' size={24} /> 
                              ) : (
                                   "guardar"
                                    ) }
                           </Button>

                       </form>
                   </CardContent>
               </Card>
           </Grid>
       </Grid>
  
      
    );  
}