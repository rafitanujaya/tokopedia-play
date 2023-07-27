require('dotenv').config();
// EXPRESS
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT

// MONGOOSE
const connectDatabase = require('./utils/mongodb')
connectDatabase();

// Routes
const routesVideo = require('./routes/video.routes')
const routesComment = require('./routes/comment.routes')
const routesProduct = require('./routes/product.routes')

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use('/api', routesVideo);
app.use('/api', routesComment);
app.use('/api', routesProduct);

app.listen(port, () => {
    console.log(`server started at http//localhost:${port}`)
})