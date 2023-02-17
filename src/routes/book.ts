import { BooksController } from "../controllers/BooksController";
import { ErrorHandler } from "../utils/Errorhandler";
import { AuthMiddleware } from "../middlewares/AuthMiddleware"; 
import express from "express";

const booksController = new BooksController()
const router = express.Router();
router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBook);
router.post(
  "/",
  ErrorHandler.handleError(AuthMiddleware.authenticate),
  ErrorHandler.handleError(booksController.createBook)
);
router.put("/:id", ErrorHandler.handleError(booksController.updateBook));
router.delete("/:id", booksController.deleteBook);


export default router;