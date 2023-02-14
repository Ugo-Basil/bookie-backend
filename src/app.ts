import express,{Express} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import authorsRoutes from './routes/author'

const app: Express = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/authors', authorsRoutes)

// app.get('/hello', (req, res, next) => {
//     return res.status(200).json({
//         message: 'Hello World'
//     })
// })

export default app 