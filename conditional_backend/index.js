const express = require("express");
const app = express();
var cors = require('cors');
const connectDB = require('./config/db')


//MongoDB Connection
connectDB();


//Define PORT that will listen for HTTP requests
const PORT = process.env.PORT || 5000;

//defualt middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) =>
  res.json({ msg: "API response" })
);

//Bringing routes
const QuestionRoutes = require("./routes/api/questions")
const AuthRoute = require("./routes/api/auth")


//Using Routers
app.use("/api/question/", QuestionRoutes  );
app.use("/api/login/", AuthRoute  );

app.listen(PORT, function () {
  console.log("server statrted at port : " + PORT);
});
