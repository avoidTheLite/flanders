import { Router } from 'express';
const router = Router();
import bodyParser from "body-parser";
import controllers from '../controllers/index.js';
import { successFormatter } from '../services/responseAPI.js';
import { errorFormatter } from '../services/responseAPI.js';

const jsonParser = bodyParser.json();

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.get('/getroute1/:inputID', (req,res)=> {
    const inputID = req.params['inputID'];

    try {
        const results = controllers.controllerFunction1(req,res, inputID)
        const message = `Successfully retrieved with inputID = ${inputID}`
        res.send(successFormatter(message, results, 200))
    const responseJson = controllerFunction1(req,res)
    } catch (error) {
        res.send(errorFormatter(error.message, 500))
    }
           
})

router.get('/getroute2', (req,res) => {

    try {
        const results = controllers.controllerFunction2(req,res)
        const message = `Successfully retrieved`
        res.send(successFormatter(message, results, 200))
    const responseJson = controllerFunction1(req,res)
    } catch (error) {
        res.send(errorFormatter(error.message, 500))
    }

})

router.post('/postroute1', jsonParser, async (req,res,) => {
    
    try {
        const results = controllers.controllerFunction3(req,res)
        const message = `Successfully retrieved`
        res.send(successFormatter(message, results, 200))
    } catch (error) {
        
    }
})

export default router
