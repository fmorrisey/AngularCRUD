let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  //   bodyParser = require("body-parser")
  mongoDB = require("./database/db");

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDB.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database successfully connected");
    },
    (error) => {
      console.log(`Database error: ${error}`);
    }
  );

const bookRoute = require("./routes/book.routes");

/* DEPRECATED
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extend: true,
    })
    );
*/

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, "dist/AngularCRUD")));

//API ROOT
app.use("/api", bookRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// 404 HANDLER
// I'M STILL NOT FOUND!!!
app.use((req, res, next) => {
  next(createError(404));
});

// BASE ROUTE
app.get("/", (req, res) => {
  res.setEncoding("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path, join(__dirname, "dist/AngularCrud/index.html"));
});

// Error Handler
// We need handles on these errors
// Makes them easier to grab
app.use(function (err, req, res, next) {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
