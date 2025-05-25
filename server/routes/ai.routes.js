import expreess from 'express'
import { geminiresponse } from '../controller/ai.controller.js';

const router = expreess.Router();

router.post('/get-response' , geminiresponse)


export default router;