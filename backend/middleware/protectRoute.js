import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({error: "Unauthorized -No Token Provided"})
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decodedToken) {
            return res.status(401).json({error: "Unauthorized -Invalid token"})
        }

        const user = await User.findById(decodedToken.userId)?.select("-password");

        if (!user) {
            return res.status(404).json({error: "No user found"});
        }

        req.user = user

        next()
    } catch (error) {
        console.log("Error occured in protectRoute middleware", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute;