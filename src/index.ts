import * as dotenv from 'dotenv';

import app from './app';
import { AppDataSource } from './database/data-source';


dotenv.config();


const PORT = process.env.APP_PORT || 3001;

AppDataSource.initialize().then(async () => {
    console.log('Database connection successful')
}).catch((err) => {
    console.error(`${err} Something went wrong with database connection`);
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
