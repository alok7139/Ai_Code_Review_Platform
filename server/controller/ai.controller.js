import axios from 'axios';
import { airesponse } from '../services/ai.service.js';

export const geminiresponse = async(req,res) => {
    const prompt = req.body.prompt;
    if(!prompt){
        return res.status(400).send("Prompt is required")
    }
    const data = await airesponse(prompt);

    return res.send(data);
}