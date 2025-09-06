import Chat from "../model/Chat.js";

const createChat = async (req, res) => {
  try {
    const userId = req.user._id;
    const chatData = {
      userId,
      messages: [],
      chatName: "New chat",
      userName: req.user.name,
    };

    await Chat.create(chatData);
    res.json({ success: true, message: "Chat created" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const getChats = async (req, res) => {
  try {
    const userId = req.user._id;
    const chats = await Chat.find({ userId }).sort({ updatedAt: -1 });

    res.json({ success: true, chats });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const deleteChat = async (req, res) => {
  try {
    const userId = req.user._id;
    const { chatId } = req.body;
    await Chat.deleteOne({ _id: chatId, userId });

    res.json({ success: true, message: "Chat deleted" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export {createChat, getChats, deleteChat}