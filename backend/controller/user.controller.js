import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
    
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        return res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getAllUsers controller", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }    
}