require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;
const path = require('path');

const connectDatabase = require("./utils/mongodb");
connectDatabase();

const routesVideo = require("./routes/video.routes");
const routesComment = require("./routes/comment.routes");
const routesProduct = require("./routes/product.routes");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static(path.join(__dirname, '../../front-end/dist')));

app.use("/api", routesVideo);
app.use("/api", routesComment);
app.use("/api", routesProduct);

app.get('/', (req, res) => {
  console.log("ini dijalanin")
  res.sendFile(path.join(__dirname, '../../front-end/dist/index.html'));
});

app.listen(port, () => {
  console.log(`server started at http//localhost:${port}`);
});
