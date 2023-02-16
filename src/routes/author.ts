import express from "express";
import { AuthorsController } from "../controllers/AuthorsController";
import { ErrorHandler } from "../utils/Errorhandler";
import { FileUploader } from "../middlewares/FileUploader";

const authorsController = new AuthorsController;

const router = express.Router();

router.get('/', authorsController.getAuthors)

router.get("/:id", ErrorHandler.handleError(authorsController.getAuthor));

router.post(
  "/",
  FileUploader.upload("image", "authors", 2 * 1024 * 1024),
  ErrorHandler.handleError(authorsController.createAuthor)
);

router.put("/:id", ErrorHandler.handleError(authorsController.updateAuthor));

router.delete(
  "/:id",
  ErrorHandler.handleError(authorsController.deleteAuthor)
);

export default router