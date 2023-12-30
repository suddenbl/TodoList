import styled from 'styled-components';
import Button from '../Button/Button';

const ConstructorWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: blueviolet;
  border-radius: 5px;
`;

const ConstructorTitle = styled.label`
  font-size: 30px;
  color: white;
`;

const ConstructorInput = styled.input`
  padding: 10px;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  border: none;
  transition: outline 0.3s ease-in-out;

  &:focus {
    outline: 2px solid black;
  }
`;

const SubmitButton = styled(Button)`
  width: 115px;
`;

export { ConstructorTitle, ConstructorInput, ConstructorWrapper, SubmitButton };
