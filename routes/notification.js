import {Router} from 'express';

const router = Router();

router.post('/create-notification', (req, res) => {
    res.send("Notification created");
});

router.get('/get-notification', (req, res) => {
    res.send("Notification retrieved");
});

router.post('/archive-notification', (req, res)=> {
    res.send("Notification archived");
})