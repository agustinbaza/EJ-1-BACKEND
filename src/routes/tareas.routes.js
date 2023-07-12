import { Router } from "express";
import {
  borrarTarea,
  controladorPrueba,
  crearTarea,
  editarTarea,
  obtenerListaTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers";
import { check } from "express-validator";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router
  .route("/tareas")
  .post(
    [
      check("nombreTarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es obligatorio")
        .isLength({min:2, max:40})
        .withMessage('El nombre de la tarea debe contener entre 2 y 100 caracteres')
    ],
    crearTarea
  )
  .get(obtenerListaTareas);
router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(editarTarea);

export default router;

