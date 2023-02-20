const {Router} = require('express')
const { getToDo, createToDo, updateToDo, deleteToDo } = require('../controllers/todoController')
const route = Router()

route.get('/', getToDo)
route.post('/save', createToDo)
route.put('/update', updateToDo)
route.delete('/delete', deleteToDo)




module.exports = route