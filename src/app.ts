import express from "express";
import * as dotenv from "dotenv";
import { greetPerson } from "./greet-person";
dotenv.config();

const PORT = process.env.port || 8080;
const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Server is now running");
});

app.get("/greet", (req, res, next) => {
  const personName = req.query.name as string;
  const greeting = greetPerson(personName);
  res.send(greeting);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
