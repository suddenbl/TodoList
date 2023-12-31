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

const ConstructorLabel = styled.label`
  position: relative;
  width: 100%;
`;

const ConstructorInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  color: black;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: 2px solid aquamarine;
  }
`;

const ErrorMsg = styled.div`
  position: absolute;
  padding: 3px;
  font-size: 12px;
  color: black;
  background-color: red;
  text-align: center;
  bottom: -22px;
  left: 0;
  right: 0;
`;

const SubmitButton = styled(Button)`
  width: 115px;
`;

export {
  ConstructorTitle,
  ConstructorInput,
  ConstructorWrapper,
  ConstructorLabel,
  ErrorMsg,
  SubmitButton,
};
