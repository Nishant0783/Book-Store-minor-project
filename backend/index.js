import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/booksModel.js';
import bookRoutes from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware to handle CORS policy
// Option1: Allow All orgins with default cors(*)
app.use(cors());

// Option2: Allow custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

app.get('/', (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', bookRoutes);









mongoose.connect(mongoDBURL)
    .then(() => {    
        console.log("MongoDB Connected")
        app.listen(PORT, ()=>{
            console.log(`App is lsitening to port: ${PORT}`)
        });
        
    })
    .catch((error)=>{
        console.error("Error connecting MongoDB: " + error);
    })
