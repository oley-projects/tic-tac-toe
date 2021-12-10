// Styles
import styled from "styled-components";

const Modal = (
  { hiddenModal,
    setHiddenModal,
    firstPlayerName,
    setFirstPlayerName,
    secondPlayerName,
    setSecondPlayerName,
  }
  ) => {
  const playerNamesSaveHandler = () => {
    setHiddenModal(!hiddenModal);
  }
  const playerFirstHandler = (e) => {
    firstPlayerName = e.target.value;
    setFirstPlayerName(firstPlayerName);
  }
  const playerSecondHandler = (e) => {
    secondPlayerName = e.target.value;
    setSecondPlayerName(secondPlayerName);
  }
  return (
    <StyledOverlayModal>
      <StyledModal>
        <label htmlFor="player1">Player 1 Name</label>
        <input onChange={playerFirstHandler} value={firstPlayerName} type="text" id="player1" minLength="3" maxLength="20" />
        <label htmlFor="player2">Player 2 Name</label>
        <input onChange={playerSecondHandler} value={secondPlayerName} type="text" id="player2" minLength="3" maxLength="20" />
        <button onClick={playerNamesSaveHandler}>Start</button>
      </StyledModal>
    </StyledOverlayModal>
  );
};

const StyledOverlayModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
`;
const StyledModal = styled.div`
  margin: 10rem auto;
  width: 330px;
  display: flex;
  flex-direction: column;
  background-color: rgb(44, 55, 85);
  padding: 3rem;
  border-radius: 1rem;
  label {
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  input {
    margin: 0.3rem 0 1rem;
    padding: 0.3rem 0.5rem;
    font-size: 1.2rem;
    border-radius: 0.2rem;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    width: 40%;
    margin: 0.5rem 0 0 auto;
    padding: 0.3rem 0;
    font-size: 1.2rem;
    color: #fff;
    background-color:  rgb(84, 95, 125);
    border: none;
    border-radius: 0.2rem;
    &:active {
      background-color: rgb(80, 90, 120);
      color: #ddd;
    }
  }
`;

export default Modal;