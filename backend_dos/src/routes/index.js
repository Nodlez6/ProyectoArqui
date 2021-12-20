const { Router } = require('express');
const router = Router();
const { upload } = require('../db')


router.post('/uploadImage', upload);


module.exports = router;