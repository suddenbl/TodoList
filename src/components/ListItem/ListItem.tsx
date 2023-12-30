import { FC } from 'react';
import { ItemCheckbox, ItemContainer, ItemTitle, ItemTitleNumber } from './ListItemStyles';
import { Todo } from '../List/List';
import Button from '../Button/Button';

const ListItem: FC<Todo> = ({ id, title, completed }) => {
  const handleDelete = async (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();

    try {
      fetch(`https://67c2d2cb1a093233.mokky.dev/todos/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log('Ошибка при удалении тудушки', error);
    }
  };

  return (
    <>
      <ItemContainer>
        <ItemTitle>
          <ItemTitleNumber>№{id}.</ItemTitleNumber> {title.toUpperCase()}
        </ItemTitle>
        <ItemCheckbox type="checkbox" value={completed.toString()} />
        <Button title="удалить" onClick={(e) => handleDelete(e, id)} />
      </ItemContainer>
    </>
  );
};

export default ListItem;
