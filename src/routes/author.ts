import express from "express";
import { AuthorsController } from "../controllers/AuthorsController";
import { ErrorHandler } from "../utils/Errorhandler";

const authorsController = new AuthorsController;

const router = express.Router();

router.get('/', authorsController.getAuthors)
router.get("/:id", ErrorHandler.handleError(authorsController.getAuthor ));


export default router