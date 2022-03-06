const pool = require('../db')

const getAllTasks = async (req, res, next) => {
    try {
        const allTask = await pool.query('SELECT * FROM usuarios;')

        res.json(allTask.rows)
    } catch (error) {
        next(error);
    }
}

const getTask = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('SELECT * FROM usuarios WHERE usuario = $1', [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createTask = async (req, res, next) => {
    const { usuario, nombre, contraseña, correo, localidad } = req.body

    try {
        const result = await pool.query('INSERT INTO usuarios (usuario, nombre, contraseña, correo, localidad) VALUES ($1,$2,$3,$4,$5) RETURNING *;',
            [usuario, nombre, contraseña, correo, localidad]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }


}

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('DELETE FROM usuarios WHERE usuario = $1', [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, contraseña, correo, localidad } = req.body

        const result = await pool.query('UPDATE usuarios SET nombre=$1, contraseña=$2, correo=$3, localidad=$4 WHERE usuario = $5 RETURNING *', [nombre, contraseña.correo, localidad, id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado"
            });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}