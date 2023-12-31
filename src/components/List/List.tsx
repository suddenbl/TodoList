import { useEffect, FC } from 'react';
import { ListContainer, Loading, StyledList } from './ListStyles';
import ListItem from '../ListItem/ListItem';
import TodoConstructor from '../TodoConstructor/TodoConstructor';
import { useTodoStore } from '../../store/todosStore';

const List: FC = () => {
  const { todos, setFetchTodos } = useTodoStore();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      console.log(data);
      setFetchTodos(data);
    };

    fetchTodos();
  }, []);

  const todoArray = todos.map((item, index) => <ListItem key={item.id} {...item} index={index} />);

  return (
    <>
      <ListContainer>
        <TodoConstructor />
        <StyledList>{todos.length > 0 ? todoArray : <Loading>Loading...</Loading>}</StyledList>
      </ListContainer>
    </>
  );
};

export default List;
