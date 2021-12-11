// Styles
import styled from "styled-components";

const GameCell = () => {
  return(
    <Cell />
  );
};

const Cell = styled.div`
  border-right: 0.4rem solid #444;
  border-bottom: 0.4rem solid #444;
`;

export default GameCell;