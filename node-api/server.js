const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Seja bem-vindo Jaimerson!"));

app.listen(3001);