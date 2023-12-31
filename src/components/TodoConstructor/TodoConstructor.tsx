import React, { FC, useState } from 'react';
import {
  ConstructorInput,
  ConstructorLabel,
  ConstructorTitle,
  ConstructorWrapper,
  ErrorMsg,
  SubmitButton,
} from './TodoConstructorStyles';
import { useTodoStore } from '../../store/todosStore';

const TodoConstructor: FC = () => {
  const [todoName, setTodoName] = useState<string>('');
  const { setTodo } = useTodoStore();

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleInput = (title: string) => {
    if (title.length < 3) {
      setError(true);
      setErrorMsg('Title must be more than 3 characters long.');
    } else {
      setError(false);
      setErrorMsg('');
    }
    setTodoName(title);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>, title: string) => {
    e.preventDefault();

    try {
      if (title.length < 3) {
        setError(true);
        setErrorMsg('Title must be more than 3 characters long.');
        return;
      }

      setError(false);
      setErrorMsg('');

      const todoObject = {
        userId: 1,
        id: Math.floor(Math.random() * 1000),
        title,
        completed: false,
      };

      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(todoObject),
      });

      if (response.ok) {
        setTodo(todoObject);
        setTodoName('');
      } else {
        setError(true);
        setErrorMsg('Error publishing todo');
      }
    } catch (error) {
      console.log('Error with publishing todo', error);
      setError(true);
      setErrorMsg('Error publishing todo');
    }
  };

  return (
    <>
      <ConstructorWrapper>
        <ConstructorTitle>Write your todo: </ConstructorTitle>
        <ConstructorLabel>
          <ConstructorInput
            type="text"
            value={todoName}
            onChange={(e) => handleInput(e.target.value)}
          />
          {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </ConstructorLabel>
        <SubmitButton
          title="Create"
          isDisabled={error}
          onClick={(e) => handleSubmit(e, todoName)}
        />
      </ConstructorWrapper>
    </>
  );
};

export default TodoConstructor;
