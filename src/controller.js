const pool = require('../db/server');
const queries = require("./queries");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
const getStudendById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(queries.chechkEmailExsits, [email], (error, result) => {
        if (result.rows.length) {
            res.send("Email already exsist");
        } else {
            pool.query(queries.addStudent, [name, email, age, dob], (error, result) => {
                if (error) {
                    console.log("bir hata oluştu")
                    throw error;

                }
                else {
                    res.status(200).json({ success: true, data: req.body });
                }
            })
        }


    })


}



const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, result) => {
        if (!result.rows.length) {
            res.send("student does not exsist in the database");
        } else {
            pool.query(queries.removeStudent, [id], (error, result) => {
                if (error) throw error
                res.status(200).send("Student removed succesfully")
            })
        }


    })
}


const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body

    pool.query(queries.getStudentById, [id], (error, result) => {
        if (!result.rows.length) {
            res.send("student does not exsist");
        }

        pool.query(queries.updateStudent, [name, id], (error, result) => {
            if (error) throw error;

            res.status(200).json({ success: true, data: req.body });
        })

    })



}



module.exports = {
    getStudents,
    getStudendById,
    addStudent,
    removeStudent,
    updateStudent


}