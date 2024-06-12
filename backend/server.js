require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connnection = require("./src/config/database");
const userRouter = require("./src/routes/userRouter");
const postRouter = require("./src/routes/postRouter");
const commentPostRouter = require("./src/routes/commentPostRouter");
const exploreRouter = require("./src/routes/exploreRouter");
const commentExploreRouter = require("./src/routes/commentExploreRouter");
const chatRouter = require("./src/routes/chatRouter");
const messageRouter = require("./src/routes/messageRouter");

const app = express();
const port = process.env.PORT || 8001;
const hostname = process.env.HOSTNAME || 8000;
// app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "45mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", exploreRouter);
app.use("/api", commentPostRouter);
app.use("/api", commentExploreRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
// app.use("/api", likeRouter);

connnection();

const server = app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 6000,
  cors: {
    origin: "http://localhost:5173",
  },
});

try {
  io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      socket.emit("connected");
    });

    socket.on("join chat", (room) => {
      socket.join(room);
      console.log("user join" + room);
    });

    socket.on("new message", (newMessage) => {
      let chat = newMessage.chat;

      if (!chat.users) return;

      chat.users.forEach((user) => {
        if (user._id === newMessage.sender._id) return;

        socket.in(user._id).emit("message received", newMessage);
      });
    });

    socket.off("setup", (userData) => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });
} catch (error) {
  console.error(error);
}
