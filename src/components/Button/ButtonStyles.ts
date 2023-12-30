import styled from 'styled-components';
import { buttonReset } from '../../styles/mixins';

const StyledButton = styled.button`
  ${buttonReset}

  /* max-width: 115px; */
  color: white;
  padding: 10px;
  background-color: #3b6780;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    background-color: #165475;
  }

  &:hover {
    background-color: #254252;
  }

  &:active {
    background-color: #142630;
  }
`;

export { StyledButton };
