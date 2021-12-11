// Styles
import styled from "styled-components";

const Score = () => {
  return(
    <StyledScore>
      <p>Score</p>
      <p>Player 1: 0</p>
      <p>Player 2: 0</p>
    </StyledScore>
  );
};

const StyledScore = styled.div`
  color: #222;
  font-size: 1.4rem;
  margin-right: 2rem;
  p {
    padding: 0.5rem 0;
    max-width: 200px;
  }
`;

export default Score;