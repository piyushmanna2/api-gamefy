require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");

const categoryRouter = require("./router/category-router");
const gameRouter = require("./router/games-router");

const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', categoryRouter);
app.use('/api', gameRouter);

const PORT = process.env.PORT || 4212;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database', err);
});

module.exports = app;