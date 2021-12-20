const express = require('express')
const app = express();
const port = 3002;
const path = require('path');
const multer = require('multer');
// middlewares
app.use(express.json());


//Settings
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

const storage = multer.diskStorage({

    destination: path.join(__dirname , 'public/uploads'),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
})

app.use(multer({
    storage: storage,
    dest: path.join(__dirname , 'public/uploads')
}).single('image'));
// Rutas
app.use(require('./routes/index'))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   
    
})
