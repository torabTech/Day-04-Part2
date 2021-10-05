import express from 'express';
require('./api/db/connection').open();
import route from './api/routes/gameRoutes';

const app = express();

app.use('/api/games',route);

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
});