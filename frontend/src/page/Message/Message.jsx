import { useEffect } from "react";
import ChatBoard from "./part/ChatBoard";
import ListChat from "./part/ListChat";
import { useState } from "react";

const Message = () => {
  const [height, setHeight] = useState("");
  const [viewport, setViewport] = useState();
  // Check viewport
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const element = document.querySelector(".chat-board");
    const elementOffsetTop = element.offsetTop;
    const height = `${screenHeight - elementOffsetTop}px`;
    setHeight(height);
    window.addEventListener("resize", function () {
      setViewport(this.window.innerHeight);
      console.log("change viewport");
    });
    return () => {
      window.removeEventListener("resize", function () {
        setViewport(this.window.innerHeight);
      });
    };
  }, [viewport]);

  return (
    <div
      className="bg-darkColors2 rounded-[20px] md:p-[25px] p-5 relative text-white flex gap-[30px] chat-board"
      style={{ height: height }}
    >
      <ListChat></ListChat>
      <ChatBoard></ChatBoard>
    </div>
  );
};

export default Message;
