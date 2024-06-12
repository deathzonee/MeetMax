import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(); // choose chat
  const [chats, setChats] = useState();
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

ChatProvider.propTypes = {
  children: PropTypes.node,
};
