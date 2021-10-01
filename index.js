const express = require('express');
require('./api/db/connection').open();
const route = require('./api/routes/gameRoutes');

const app = express();

app.use('/api/games',route);

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
});