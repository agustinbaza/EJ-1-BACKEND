import { Router } from "express";
import { borrarTarea, controladorPrueba, crearTarea, editarTarea, obtenerListaTareas, obtenerTarea } from "../controllers/tareas.controllers";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router.route("/tareas").post(crearTarea).get(obtenerListaTareas);
router.route("/tareas/:id").get(obtenerTarea).delete(borrarTarea).put(editarTarea);

export default router;


// app.get('/prueba', (req, res )=>{
//     res.send('Esta es una prueba de mi ruta GET')
// })

