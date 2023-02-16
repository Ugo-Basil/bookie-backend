import { AppDataSource } from "../database/data-source";
import { PageUtil } from "../database/Paginator";
import { Author } from "../entitites/Author";
import { ResponseUtil } from "../utils/Response";
import { Response, Request } from "express";


export class AuthorsController {
    async getAuthors(req, res) {
        const builder = await AppDataSource.getRepository(Author).createQueryBuilder().orderBy("id", "DESC")
        const { items: authors, paginationInfo } = await PageUtil.paginate(builder, req, res)
        return ResponseUtil.sendResponse(res, authors, paginationInfo)
    }

    async getAuthor(req: Request, res: Response): Promise<Response>{
        const author = await AppDataSource.getRepository(Author).findOneByOrFail({
            id: parseInt(req.params.id),
        })
        if (!author) {
            return ResponseUtil.sendError(res, "Author not found", 404)
        }

        author.image = `http://localhost:3000/images/authors/${author.image}`
        return ResponseUtil.sendResponse(res, author, 200)
    }
}