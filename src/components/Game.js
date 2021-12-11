// State
import { useState } from "react";
// Components
import Modal from "./Modal";
import Score from "./Score";
import GameBoard from "./GameBoard";
// Styles
import styled from "styled-components";

const Game = () => {
  const [hiddenModal, setHiddenModal] = useState(true);
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
      <Score />
      <GameBoard />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default Game;