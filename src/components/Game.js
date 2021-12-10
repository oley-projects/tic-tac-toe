// State
import { useState } from "react";
// Components
import Modal from "../components/Modal";
// Styles
import styled from "styled-components";

const Game = () => {
  const [hiddenModal, setHiddenModal] = useState(false);
  const [firstPlayerName, setFirstPlayerName] = useState("");
  const [secondPlayerName, setSecondPlayerName] = useState("");
  return(
    <StyledGame>
      {!hiddenModal && 
        <Modal 
          hiddenModal={hiddenModal} 
          setHiddenModal={setHiddenModal} 
          firstPlayerName={firstPlayerName}
          setFirstPlayerName={setFirstPlayerName}
          secondPlayerName={secondPlayerName}
          setSecondPlayerName={setSecondPlayerName}
        />}
      <h1>Game</h1>
    </StyledGame>
  );
};

const StyledGame = styled.div``;

export default Game;