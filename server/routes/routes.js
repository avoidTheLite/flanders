import { Router } from 'express';
const router = Router();
import {controllerFunction1} from './controllers/controller.js'

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.get('/route1:ID', (req,res, controllerFunction1) => {
    let responseJson=controllerFunction1();       
    res.send(responseJson);
})

router.get('/route2', (req,res) => {
    //do something with a static route
    res.send('Response goes here');
})

export default router