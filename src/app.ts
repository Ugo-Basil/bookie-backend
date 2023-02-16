import { NextFunction } from 'express';
import express,{Express, Request, Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import authorsRoutes from './routes/author'
import { EntityNotFoundError } from 'typeorm';
import { ResponseUtil } from './utils/Response';

const app: Express = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/authors', authorsRoutes)

app.use('*', (_req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: 'invalid route'
    })
})

//Define middleware to handle errors

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof EntityNotFoundError) {
        return ResponseUtil.sendError(res, "Item/Page you are looking for does not exist", 404)
    }
    return res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
});

export default app 