import styled from "styled-components";
import SearchChat from "./SearchChat";
import BlockChats from "./BlockChats";

const ListChatStyled = styled.div`
  width: 250px;
  background-color: #191c21;
  border-radius: 8px;
  padding: 15px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListChat = () => {
  return (
    <ListChatStyled>
      <SearchChat />
      <BlockChats />
    </ListChatStyled>
  );
};

export default ListChat;
