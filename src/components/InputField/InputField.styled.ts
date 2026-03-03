import styled from "styled-components";

export const InputFieldStyled = styled.div`
  width: 100%;
  max-width: 75vw;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 3px solid #f27f34;
  border-radius: 999px;
  padding: 0px 0 0 12px;
  box-sizing: border-box;
  &:focus-within {
    border-color: rgba(235, 94, 40);
    box-shadow: 0 0 0 2px rgba(255, 162, 70, 0.79);
  }
  input {
    flex: 12;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 8px 0;
    background: transparent;
    font-family: Montserrat;
    color: #2f2f2fff;
    font-weight: 500;
  }
  input:focus {
    border: 1px;
    outline-color: #ffa54cff;
    outline-width: 1px;
    border: none;
  }
  input::placeholder {
    color: #2f2f2fff;
  }
`;

export const SendButton = styled.button`
  padding: 4px;
  margin-left: 8px;
  display: flex;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
