import styled from "styled-components";
import type { ColunmProps } from ".";

export const ColunmStyled = styled.div<ColunmProps>`
  background-color: ${(props) => props.color};
  height: 90%;
  width: 30%;
  display: flex;
  padding: 1.5rem, 1rem;
  color: #f0ece1;
  border-radius: 6px;
  justify-content: center;
  padding-top: 1rem;
  h1 {
    font-weight: 800;
    font-size: 18px;
    color: #f2e9c3ff;
  }
`;

export const ListStyled = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  p {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
