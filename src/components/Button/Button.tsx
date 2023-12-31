import { FC } from 'react';
import { SmallButton, StyledButton } from './ButtonStyles';

type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;
  isDisabled?: boolean;
};

const Button: FC<ButtonProps> = ({ title, onClick, size, isDisabled }) => {
  return (
    <>
      {size === 'small' ? (
        <SmallButton disabled={isDisabled} onClick={onClick}>
          {title.toUpperCase()}
        </SmallButton>
      ) : (
        <StyledButton disabled={isDisabled} onClick={onClick}>
          {title.toUpperCase()}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
