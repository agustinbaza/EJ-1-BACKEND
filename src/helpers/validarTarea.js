import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("nombreTarea")
      .notEmpty()
      .withMessage("El nombre de la tarea es obligatorio")
      .isLength({ min: 2, max: 40 })
      .withMessage(
        "El nombre de la tarea debe contener entre 2 y 40 caracteres"),
      (req, res, next) => { resultadoValidacion(req, res, next) }
  ]

  export default validarTarea;