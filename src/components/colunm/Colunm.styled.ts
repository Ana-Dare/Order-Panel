import styled from "styled-components";
import type { ColunmProps } from ".";

const ColunmStyled = styled.div<ColunmProps>`
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
  p {
    font-weight: 400;
    font-size: 16px;
    color: #f2e9c3ff;
  }
`;

export default ColunmStyled;
