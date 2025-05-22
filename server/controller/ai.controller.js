import axios from 'axios';
import { airesponse } from '../services/ai.service.js';

export const geminiresponse = async(req,res) => {
    let prompt = req.query.prompt;
    let data = await airesponse(prompt);

    return res.json({
        success:true,
        message : data
    })
}