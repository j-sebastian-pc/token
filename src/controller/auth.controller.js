import User from "../models/User"
import jwt from "jsonwebtoken"
import config from "../config";
import Role from "../models/Role";

export const signUp = async(req, res) => {
    
    const{username, email, password, roles} = req.body;


   const newUser = new User({
        username,
        email,
        password: await User.contraseñaEncriptada(password)
        })

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles =foundRoles.map(roles => roles._id)
            
        } else {
            const role = await Role.findOne({name: "user"})
            newUser.roles = [role._id]
        }

      const usuarioGuardado  = await newUser.save();
                console.log(usuarioGuardado);

        const token = jwt.sign({id:usuarioGuardado._id}, config.SECRET,{
            expiresIn: 86400 // 86400 son 24 horas demora  para que el token caduque
        })

        res.status(200).json({token})

} 
export const signIn = async(req, res) => {

    const user = await User.findOne({email: req.body.email});
    console.log(user);
} 