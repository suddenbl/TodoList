import styled from 'styled-components';
import { buttonReset } from '../../styles/mixins';

const StyledButton = styled.button`
  ${buttonReset}

  color: white;
  padding: 10px;
  background-color: #293a71;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  outline: none;
  border: none;

  &:focus {
    outline: blue;
    background-color: #1b274c;
  }
  &:hover {
    background-color: #1b274c;
  }
  &:active {
    background-color: #0e1426;
  }
`;

const SmallButton = styled(StyledButton)`
  max-width: 115px;
`;

export { StyledButton, SmallButton };
