import express from 'express';



// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';


// Routers
import userRouter from './routes/user-router.js'


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routers
app.use('/users', userRouter);







app.listen(3001, ()=>{
    console.log("listening on 3001");
});





