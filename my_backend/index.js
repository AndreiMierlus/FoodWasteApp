import express from 'express';
import env from 'dotenv';

env.config();

let app = express();

let port = process.env.PORT || 8003;
app.listen(port);
console.log ('API is listening on port ' + port);