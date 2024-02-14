import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Roles",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.contraseñaEncriptada = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.statics.compararContraseña = async (password, contraseñaRecibida) => {
    return await bcrypt.compare(password, contraseñaRecibida);
};

const User = model("User", userSchema); // Definir el modelo utilizando la función model()

export default User;
