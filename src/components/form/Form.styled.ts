import styled from "styled-components";

export const FormStyled = styled.div`
  width: 100%;
  max-width: 330px;
  height: 100%;
  max-height: 398px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  gap: 1rem;
  font-family: "Montserrat", sans-serif;
`;

export const InputFormStyled = styled.div`
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  gap: 19px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 0 0 0 12px;
  box-sizing: border-box;
  &:focus-within {
    border-color: rgba(250, 250, 250, 0.82);
    box-shadow: 0 0 0 1px rgba(226, 223, 219, 0.79);
  }
  input {
    flex: 12;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
  }
  input:focus {
    border: 1px;
    outline-color: #fff;
    outline-width: 1px;
    border: none;
  }
  input::placeholder {
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const WrapperButtonForm = styled.div`
  width: 100%;
  height: fit-content;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const LinkButtonSTyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  text-align: start;
  color: #fff;
`;

export const AuthButtonStyled = styled.button`
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  color: #f27f34;
  box-sizing: border-box;
  font-weight: 500;
`;
