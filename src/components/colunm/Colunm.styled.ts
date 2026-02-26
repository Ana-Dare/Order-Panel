import styled from "styled-components";
import type { ColunmProps } from ".";

export const ColunmStyled = styled.div<ColunmProps>`
  background-color: ${(props) => props.color};
  height: 90%;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem, 1rem;
  color: #f0ece1;
  border-radius: 6px;
  justify-content: center;
  padding: 1rem 4rem;

  h1 {
    font-weight: 800;
    font-size: 1.8rem;
    color: #f2e9c3ff;
    height: 15%;
    justify-content: center;
    width: 100%;
    display: flex;
  }
`;

export const ListStyled = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  gap: 0.5rem;
  li {
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.6rem;
  }
  p {
    display: flex;
    flex: 2;
  }
`;

export const OrderStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  height: 80%;
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex: 1;
`;
