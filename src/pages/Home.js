// Styles
import styled from "styled-components";
// Components
import Modal from "../components/Modal";
import Game from "../components/Game";

const Home = () => {
  return (
    <StyledHome>
      <Modal />
      <Game />
    </StyledHome>
  );
};

const StyledHome = styled.div``;

export default Home;