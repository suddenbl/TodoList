import { FC } from 'react';
import { StyledButton } from './ButtonStyles';

type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{title.toUpperCase()}</StyledButton>
    </>
  );
};

export default Button;
