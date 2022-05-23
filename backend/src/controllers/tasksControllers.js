const pool = require ('../db');

const getAllTasks = async (req,res,next) =>{
    try{
    const allTasks = await pool.query('SELECT * FROM tareas')
    console.log(allTasks)
    res.json(allTasks.rows)
    }catch(err){
      next(console.error)
    }
 }


 const getTasks = async (req,res,next) =>{
     try{
    const { id } = req.params
    const result = await pool.query('SELECT * FROM tareas WHERE id = $1',[id])

    if(result.rows.length === 0){
        res.status(404).json({message: 'id no encontrado'})
    }
    console.log(result.rows[0])
    res.json(result.rows[0])
}catch(err){
    next(console.error)
}
}


const createTasks = async (req,res,next) =>{
    try{
    const {title, description} = req.body

  const result = await pool.query('INSERT INTO tareas (title, description) VALUES($1,$2) RETURNING*',[
        title, description
    ])
   console.log(result.rows[0])
    res.json(result.rows[0])
}catch(err){
    next(console.error)
}
}


const updateTasks = async (req,res,next) =>{
    try{

    const { id } = req.params
    const {title, description} = req.body

   const result = await pool.query('UPDATE tareas SET title = $1, description = $2 WHERE id= $3 RETURNING *',
   [title,description,id])

   if(result.rows.length === 0){
    res.status(404).json({message: 'tarea no encontrada'})
}
  // console.log(result)
   return res.json(result.rows[0])
}catch(err){
    next(console.error)
} 
}


const deleteTasks = async (req,res,next) =>{
    try{
    const { id } = req.params

    const result = await pool.query('DELETE FROM tareas WHERE id = $1',[id])

    if(result.rows.length === 0){
       return res.status(404).json({message: "id no encontrado"})
    }
    
    return res.sendStatus(204) //no devuelve nada pero a la vez hace la tarea que tiene que hacer. en este caso eliminar una tarea
   //res.send('tarea eliminada con exito')
   }catch(err){
    next(console.error)
   }
}


 module.exports = {
     getAllTasks,
     getTasks,
     createTasks,
     updateTasks,
     deleteTasks
 }