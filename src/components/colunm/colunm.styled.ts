import styled from 'styled-components'
import type { ColunmProps } from '.'

const ColunmStyled = styled.div<ColunmProps>`
    background-color: ${props => props.color};
    height: 60%;
    width: 30%;
    display: flex;
    align-items: center;
    padding: 1.5rem, 1rem;
    color: #f0ece1;
`

export default ColunmStyled