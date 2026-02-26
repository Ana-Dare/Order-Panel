import styled from "styled-components";
import type { IModalStyled } from ".";

export const ModalStyled = styled.div`
  width: 25%;
  height: 15%;
  padding: 1rem;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    color: #000;
    text-align: center;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  gap: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  button {
    width: fit-content;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    border-radius: 8px;
    font-size: 1rem;
  }
`;

export const ModalButtonStyled = styled.button<IModalStyled>`
  width: fit-content;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ $variant = "cancel" }) =>
    $variant === "cancel" ? "transparent" : "#dc6022e7"};
  border: ${({ $variant = "cancel" }) =>
    $variant === "cancel" ? "2px solid #4a4a4a9b" : "none"};
`;

export const OverlayStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background-color: rgba(222, 200, 185, 0.5);
  inset: 0;
  position: fixed;
`;
