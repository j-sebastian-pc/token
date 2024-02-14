import { Router } from "express";
const router = Router();

import  * as userController from "../controller/auth.controller";


router.post("/signup", userController.signUp);

router.post("/signin", userController.signIn);

export default router;
