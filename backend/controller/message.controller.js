import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;
    
        let conversation = await Conversation.findOne({
            participants: { $all : [senderId, receiverId]}
        });
    
        if (!conversation) {
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };

        const newMessage = await Message.create({
            senderId, 
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save()
        return res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req, res) => {

    try {
        const { id: userToChat } = req.params;
        const senderId = req.user._id 
    
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat]}
        }).populate("messages");
    
        if (!conversation) {
            return res.status(200).json([])
        }
        return res.status(200).json({messages:conversation.messages})
    } catch (error) {
        console.log("Error in getMessage controller", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
}

