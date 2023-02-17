import * as dotenv from 'dotenv';
import "reflect-metadata"
import appConfig from './config/app';
import app from './app';
import { AppDataSource } from './database/data-source';


dotenv.config();

AppDataSource.initialize().then(async () => {
    console.log('Database connection successful')
}).catch((err) => {
    console.error(`${err} Something went wrong with database connection`);
    
})

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`)
})
