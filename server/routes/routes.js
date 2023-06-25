import { Router } from 'express';
const router = Router();

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.get('/route1:integer', (req,res) => {
    //do something with a specified routing param
    res.send('Response goes here');
})

router.get('/route2', (req,res) => {
    //do something with a static route
    res.send('Response goes here');
})