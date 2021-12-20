
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const fetch = require('node-fetch');


//multer


router.get('/' , (req , res) => {
    res.render('index')
});




router.post('/upload' , (req , res) => {

    res.send('uploaded')
    console.log(JSON.parse(JSON.stringify(req.body.imageselec)))


    let todo = {
        path: req.file.path,
        select: JSON.parse(JSON.stringify(req.body.imageselec)),
        name: req.file.originalname
    }

    console.log(req.file)


    fetch('http://localhost:3001/uploadImage', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    .then(json => console.log(json));


})



module.exports = router;
