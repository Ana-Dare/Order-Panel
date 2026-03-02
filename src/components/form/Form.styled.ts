import styled from "styled-components";

export const FormStyled = styled.div`
  width: 40%;
  height: 40%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: transparent;
  border: 4px solid #dc6022e7;
  gap: 1rem;
`;

export const InputFormStyled = styled.div`
  width: 100%;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  border: 1px solid #ffa54cff;
  border-radius: 999px;
  padding: 0 0 0 12px;
  box-sizing: border-box;
  &:focus-within {
    border-color: rgba(255, 165, 76, 0.79);
    box-shadow: 0 0 0 1px rgba(255, 162, 70, 0.79);
  }
  input {
    flex: 12;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
  }
  input:focus {
    border: 1px;
    outline-color: #ffa54cff;
    outline-width: 1px;
    border: none;
  }
`;

export const WrapperButtonForm = styled.div`
  width: 100%;
  height: fit-content;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    height: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #dc6022e7;
    color: #fff;
    box-sizing: border-box;
  }
`;
