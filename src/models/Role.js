import { Schema, model } from "mongoose";

const rolesSchema  = new Schema(
    {

   name: String
    }, // cada rol se guada en una coleccion con un nombre

   {

    versionKey: false,

   });

  

export default model("Role",rolesSchema);