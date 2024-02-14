import {Schema,model} from "mongoose";

const productSchema = new Schema({

    name: String,
    categoria: String,
    price: Number,
    imgURL: String,},
    {
        timestamps: true,
        versionKey:false    
    })

    export default model("product",productSchema);