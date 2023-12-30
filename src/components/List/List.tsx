import { useEffect, useState, FC } from 'react';
import { ListContainer, StyledList } from './ListStyles';
import ListItem from '../ListItem/ListItem';
import TodoConstructor from '../TodoConsctructor/TodoConstructor';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const List: FC = () => {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://67c2d2cb1a093233.mokky.dev/todos');
      const data = await response.json();
      console.log(data);
      setItems(data);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <ListContainer>
        <TodoConstructor />
        <StyledList>
          {items.length > 0 ? (
            items.map((item) => <ListItem key={item.id} {...item} />)
          ) : (
            <>Еще нет дел</>
          )}
        </StyledList>
      </ListContainer>
    </>
  );
};

export default List;
