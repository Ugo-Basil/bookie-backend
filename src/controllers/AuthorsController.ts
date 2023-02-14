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
}