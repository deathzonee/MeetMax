import { useEffect } from "react";
import io from "socket.io-client";
import MyInfo from "../../../utils/MyInfo";
import { useState } from "react";
var socket;

const ChatMessage = () => {
  const { user } = MyInfo();
  const [socketConnected, setSocketConnected] = useState(false);
  console.log("socketConnected :", socketConnected);
  useEffect(() => {
    socket = io("http://localhost:8080/", {
      transports: ["websocket"],
    });
    socket.on("connect_error", (e) => console.log(e));
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    // socket.on("typing", () => setIsTyping(true));
    // socket.on("stop typing", () => setIsTyping(false));
  }, []);
  return <div></div>;
};

export default ChatMessage;
