const { Router } = require('express');
const pool = require('../db');
const { getAllTasks, getTask, createTask, deleteTask, updateTask, getAllMedicion, getMedicion, createMedicion, deleteMedicion, updateMedicion} = require('../controllers/tasks.controller')

const router = Router();

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

router.get('/medicion', getAllMedicion)

router.get('/medicion/:id', getMedicion)

router.post('/medicion', createMedicion)

router.delete('/medicion/:id', deleteMedicion)

router.put('/medicion/:id', updateMedicion)

module.exports = router;