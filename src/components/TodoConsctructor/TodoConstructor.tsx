import React, { FC, useState } from 'react';
import {
  ConstructorInput,
  ConstructorTitle,
  ConstructorWrapper,
  SubmitButton,
} from './TodoConstructorStyles';

const TodoConstructor: FC = () => {
  const [todoName, setTodoName] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>, title: string) => {
    e.preventDefault();

    try {
      const response = await fetch('https://67c2d2cb1a093233.mokky.dev/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(title),
      });
      console.log(response);
    } catch (error) {
      console.log('Error with publishing todo', error);
    }
  };

  return (
    <>
      <ConstructorWrapper>
        <ConstructorTitle>Write your todo: </ConstructorTitle>
        <ConstructorInput
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <SubmitButton title="Создать" onClick={(e) => handleSubmit(e, todoName)}></SubmitButton>
      </ConstructorWrapper>
    </>
  );
};

export default TodoConstructor;
