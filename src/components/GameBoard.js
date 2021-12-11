// Components
import GameCell from "./GameCell";
// State
import { useState } from "react";
// Styles
import styled from "styled-components";

const GameBoard = () => {
  const cellArray = 
    [
      [[""], [""], [""]],
      [[""], [""], [""]],
      [[""], [""], [""]]
    ];
  
  return(
    <StyledGameBoard>
      {cellArray.map((el) => el.map(() => <GameCell />))}
    </StyledGameBoard>
  );
}

const StyledGameBoard = styled.div`
  width: 323px;
  height: 323px;
  border: 0.7rem solid #111;
  border-radius: 0.3rem;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

export default GameBoard;