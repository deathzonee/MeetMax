import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { ChatState } from "../../../contexts/ChatProvider";
import { token } from "../../../utils/token";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { convertTime, getSender } from "../../../utils/ChatLogic";
import MyInfo from "../../../utils/MyInfo";

const ListChatsStyled = styled.ul`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const ChatStyled = styled.li`
  display: flex;
  align-items: center;
  height: 76px;
  justify-content: space-between;
  padding: 5px;
  border-radius: 8px;
  gap: 5px;
  cursor: pointer;
  :hover {
    background-color: #212833;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const BlockChats = () => {
  const { selectedChat, setSelectedChat, chats, setChats } = ChatState();
  const { user } = MyInfo();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        "http://localhost:8080/api/chat/fetch-chat",
        config
      );
      console.log("🚀 ~ fetchChats ~ data:", data);

      setChats(data.chats);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <ListChatsStyled className="list-chat">
      {chats?.map((item, index) => (
        <Chat
          key={index}
          onClick={() => setSelectedChat("item")}
          bg={selectedChat === item ? "#212833" : ""}
          avatar={getSender(user, item?.users)?.avatar}
          name={getSender(user, item?.users)?.username}
          lastMessage={item?.latestMessage?.content}
          time={convertTime(item?.latestMessage?.updatedAt)}
          // noti
        ></Chat>
      ))}
    </ListChatsStyled>
  );
};

export default BlockChats;

const Chat = ({ avatar, name, lastMessage, time, noti, bg, onClick }) => {
  return (
    <ChatStyled className={bg ? `bg-[${bg}]` : ""} onClick={onClick}>
      <span className="info">
        <span className="relative flex-shrink-0">
          <LazyLoadImage
            effect="blur"
            src={avatar}
            alt="avatar"
            className="object-cover w-10 h-10 rounded-full"
          />
          {noti && (
            <span className="absolute flex items-center justify-center w-1 h-1 p-2 text-white rounded-full top-1 right-1 translate-x-2/4 -translate-y-2/4 text-bodyRegular bg-redColors">
              1
            </span>
          )}
        </span>
        <div className="flex flex-col">
          <h2 className="font-medium text-displayMedium line-clamp-1">
            {name}
          </h2>
          <h4 className="text-bodyRegular font-medium text-[#959EAE] line-clamp-1">
            {lastMessage}
          </h4>
        </div>
      </span>
      <span>
        <h4 className="text-bodyRegular font-medium text-[#959EAE]">{time}</h4>
      </span>
    </ChatStyled>
  );
};

Chat.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  time: PropTypes.string,
  noti: PropTypes.bool,
  bg: PropTypes.string,
  onClick: PropTypes.func,
};
