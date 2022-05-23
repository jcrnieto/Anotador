const { Router} = require('express');
const { getAllTasks, getTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/tasksControllers');


const router = Router();

router.get('/tasks', getAllTasks)


router.get('/tasks/:id', getTasks)


router.post('/tasks', createTasks)


router.put('/tasks/:id', updateTasks)


router.delete('/tasks/:id', deleteTasks)

module.exports = router;