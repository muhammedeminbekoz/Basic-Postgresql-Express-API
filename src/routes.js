const Router = require("express");
const controller = require('./controller.js');
const router = Router();



router.get('/', (req, res) => {
    res.send("using api routing");
})

router.get('/getStudents', controller.getStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudendById);
router.put('/:id', controller.updateStudent)
router.delete('/:id', controller.removeStudent)

module.exports = router;