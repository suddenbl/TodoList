import { FC } from 'react';
import { ItemButtonsContainer, ItemContainer, ItemTitle, ItemTitleNumber } from './ListItemStyles';
import Button from '../Button/Button';
import { useTodoStore } from '../../store/todosStore';

const ListItem: FC<Todo> = ({ id, title, completed, index }) => {
  const { updateTodo, removeTodo } = useTodoStore();

  const handleDelete = async (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });

      removeTodo(id);
    } catch (error) {
      console.log('Ошибка при удалении тудушки', error);
    }
  };

  const handleChange = async (e: React.MouseEvent<HTMLElement>, id: number, completed: boolean) => {
    e.preventDefault();
    try {
      const response = fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      });
      console.log('Изменение отправлено успешно', response);

      updateTodo(id);
    } catch (error) {
      console.log('Ошибка при удалении тудушки', error);
    }
  };

  return (
    <>
      <ItemContainer>
        <ItemTitle $completed={completed}>
          <ItemTitleNumber>№{index + 1}.</ItemTitleNumber> {title.toUpperCase()}
        </ItemTitle>
        <ItemButtonsContainer>
          <Button size="small" title="Change" onClick={(e) => handleChange(e, id, completed)} />
          <Button size="small" title="Remove" onClick={(e) => handleDelete(e, id)} />
        </ItemButtonsContainer>
      </ItemContainer>
    </>
  );
};

export default ListItem;
