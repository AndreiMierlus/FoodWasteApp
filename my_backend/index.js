import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import initializeDatabase from './entity/dbInit.js';
import createDbRouter from './routes/createDBRouter.js';
import userRouter from './routes/UserRouter.js';
import itemRouter from './routes/ItemRouter.js';
import itemClaimRouter from './routes/ItemClaimRouter.js';
import friendGroupRouter from './routes/FriendGroupRouter.js';
import friendRequestRouter from './routes/FriendRequestRouter.js';


env.config();

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDatabase();

app.use('/api', userRouter);
app.use('/api', itemRouter);
app.use('/api', friendRequestRouter);
app.use('/api', createDbRouter);
app.use('/api', itemClaimRouter);
app.use('/api', friendGroupRouter);

let port = process.env.PORT || 8003;
app.listen(port);
console.log ('API is listening on port ' + port);