// Styles
import styled from "styled-components";

const GameCell = () => {
  return(
    <Cell />
  );
};

const Cell = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #111;
`;

export default GameCell;