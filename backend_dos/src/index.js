const express = require('express')
const app = express();
const port = 3001;

// middlewares
app.use(express.json());


// Rutas
app.use(require('./routes/index'))



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   
    
})
