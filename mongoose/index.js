
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const car = require("./routes/car");
const user = require("./routes/user");
app.use(express.json());
app.use("/api/cars/", car);
app.use("/api/user/", user); 


const port = process.env.PORT || 3003;
app.listen(port, () => console.log("Escuchando Puerto: " + port));


mongoose
  .connect("mongodb://127.0.0.1:27017/carsdb", { useNewUrlParser: true })
  .then(() => console.log("Conectado correctamente a MongoDB"))
  .catch(() => console.log("Error al conectarse a MongoDB"));
  
