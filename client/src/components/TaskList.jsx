import {useEffect,useState} from 'react'
import { Card, CardContent, Typography, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom' //me traigo el hook use navigate de react-router-dom
import { textAlign } from '@mui/system'


export default function TaskList(){

  const navigate = useNavigate() //lo guardo en una constante y lo ejecuto

   const [tasks, setTasks] = useState([])

   const loadTasks = async ()=>{ //creo una funcion la cual me traigo la info del back 
      const response= await fetch('http://localhost:3002/tasks') //creo la variable para la informacion
      const data= await response.json() //la convierto en json
      //console.log('esto es data',data)
      setTasks(data) // a esa variable la ejecuto con useState
   }

   const handleDelete= async (id) =>{
      
       await fetch(`http://localhost:3002/tasks/${id}`,{
         method : 'DELETE'
      })
     setTasks(tasks.filter(el=> el.id !== id))
      
   }

   useEffect(()=>{
     loadTasks()
   },[])

//fuxduysxgjfhd
    return(
       <>
         <h1 style={{marginTop:"70px"}}>TaskList</h1>
         {
            tasks.map(el=>(
               <Card key= {el.id} style={{
                  marginBotton:".9rem",
                  backgroundColor:'#1e272e',
                  marginTop:"20px",
               }}>
                  <CardContent style={{
                     display: 'flex',
                     justifyContent:'space-between'
                  }}>
                     <div style={{color:'white'}}>
                     <Typography>{el.title}</Typography>
                     <Typography>{el.description}</Typography>
                     </div>
                     
                     <div>
                     <Button
                      variant='contained'
                       color= 'inherit'
                        onClick={()=> navigate(`/task/${el.id}/edit`)}>
                        EDITAR
                     </Button>
                     <Button
                      variant='contained'
                      color= 'warning'
                      onClick={()=> handleDelete(el.id) }
                      style={{marginLeft:'.5rem'}}>
                        ELIMINAR
                     </Button>
                     </div>
                  </CardContent>
               </Card>
            ))
         }
       </>
    )
}