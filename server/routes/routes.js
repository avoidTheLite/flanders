import { Router } from 'express';
const router = Router();
import {controllerFunction1} from '../controllers/controller';

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.get('/route1:ID', (req,res)=> {
    
    const responseJson = controllerFunction1(req,res)
           
    res.send(responseJson);
})

router.get('/route2', (req,res) => {
    //do something with a static route 
    res.send('Response goes here');
})

export default router