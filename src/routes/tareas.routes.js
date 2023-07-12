import { Router } from "express";
import {
  borrarTarea,
  controladorPrueba,
  crearTarea,
  editarTarea,
  obtenerListaTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers";
import validarTarea from "../helpers/validarTarea";

const router = Router();

router.route("/prueba").get(controladorPrueba);
router
  .route("/tareas")
  .post( validarTarea , crearTarea)
  .get(obtenerListaTareas);
router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put( validarTarea, editarTarea
  );

export default router;
