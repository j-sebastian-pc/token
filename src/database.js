import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/companybd")
  .then(() => console.log("MongoDB conectado (°-°)/"))
  .catch(error => console.error("Error al conectar a MongoDB:", error));
