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
  width: 330px;
  height: 330px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 0.4rem solid #444;
  border-left: 0.4rem solid #444;
  background-color: rgb(44, 55, 85);
`;

export default GameBoard;