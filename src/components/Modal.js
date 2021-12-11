// State
import { useState } from "react";
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
    const [characterMinCheck, setCharacterMinCheck] = useState(false);
    const playerNamesSaveHandler = () => {
      if (firstPlayerName.length >= 3 && secondPlayerName.length >= 3) {
        setHiddenModal(!hiddenModal);
      } else {
        setCharacterMinCheck(true);
        setTimeout(() => setCharacterMinCheck(false), 2000);
      }
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
          {characterMinCheck && <div>Player's name is too short, should be at least 3 characters</div>}
        </StyledModal>
      </StyledOverlayModal>
    );
};

const StyledOverlayModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledModal = styled.div`
  width: 360px;
  height: 330px;
  display: flex;
  flex-direction: column;
  background-color: rgb(44, 55, 85);
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  z-index: 10;
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
    margin: 3.5rem 0 0 auto;
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
  div {
    width: 70%;
    color: red;
    text-align: center;
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Modal;