const express = require("express");

const app = express();
app.use(express.json());
const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to my express challenge");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

app.post("/api/movies", movieHandlers.postMovies);

app.post("/api/users", userHandlers.postUsers);

app.put("/api/movies/:id", movieHandlers.updateMovies);

app.put("/api/users/:id", userHandlers.updateUsers);

app.delete("/api/movies/:id", movieHandlers.deleteMovies);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
