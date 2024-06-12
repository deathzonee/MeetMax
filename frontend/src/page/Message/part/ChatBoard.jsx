import styled from "styled-components";
import { ChatState } from "../../../contexts/ChatProvider";
import { InfoIcon } from "../../../components/icons";
import ChatMessage from "./ChatMessage";
import FormSendMessage from "./FormSendMessage";

const ChatBoardStyled = styled.div`
  width: 100%;
  background-color: #191c21;
  border-radius: 8px;
  padding: 15px;
  position: relative;
  .notifi {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding: 0 150px 0 150px;
    text-align: center;
  }
  .chat {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ::after {
        content: "";
        position: absolute;
        width: 100%;
        top: 75px;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #4e5d78;
      }
    }
    &-nameuser {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
    &-avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 100rem;
        object-fit: cover;
      }
      flex-shrink: 0;
    }
  }
`;

const ChatBoard = () => {
  const { selectedChat } = ChatState();
  return (
    <ChatBoardStyled>
      {selectedChat ? (
        <>
          <div className="chat-header">
            <div className="flex items-center gap-5">
              <span className="chat-avatar">
                <img src="https://source.unsplash.com/random" alt="" />
              </span>
              <h2 className="chat-nameuser">Jagrit Pratap Bill</h2>
            </div>
            <span className="chat-iconinfo">
              <InfoIcon></InfoIcon>
            </span>
          </div>
          <ChatMessage></ChatMessage>
          <FormSendMessage></FormSendMessage>
        </>
      ) : (
        <div className="notifi">
          {` Click on a user's name to start chatting with them about anything you
          want.`}
        </div>
      )}
    </ChatBoardStyled>
  );
};

export default ChatBoard;
