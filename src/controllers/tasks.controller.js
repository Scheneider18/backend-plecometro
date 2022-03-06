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

const getAllMedicion = async (req, res, next) => {
    try {
        const allTask = await pool.query('SELECT * FROM mediciones;')

        res.json(allTask.rows)
    } catch (error) {
        next(error);
    }
}

const getMedicion = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('SELECT * FROM mediciones WHERE id = $1', [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const createMedicion = async (req, res, next) => {
    const { ph, pm, fecha, usuario } = req.body

    try {
        const result = await pool.query('INSERT INTO mediciones (ph, pm, fecha, usuario) VALUES ($1,$2,$3,$4) RETURNING *;',
            [usuario, nombre, contraseña, correo, localidad]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }


}

const deleteMedicion = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await pool.query('DELETE FROM mediciones WHERE id = $1', [id])

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }
}

const updateMedicion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nombre, contraseña, correo, localidad } = req.body

        const result = await pool.query('UPDATE mediciones SET ph=$1, pm=$2, fecha=$3, usuario=$4 WHERE id = $5 RETURNING *', [nombre, contraseña.correo, localidad, id]);

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
    updateTask,
    getAllMedicion,
    getMedicion,
    createMedicion,
    deleteMedicion,
    updateMedicion
}