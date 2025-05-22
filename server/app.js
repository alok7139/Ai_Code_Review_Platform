import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import airoutes from './routes/ai.routes.js'

const app = express();
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res) => {
    res.json('server is working')
})

app.use('/ai' , airoutes);



export default app;