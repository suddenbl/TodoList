import { create } from 'zustand';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface TodoStore {
  todos: Todo[];
  setFetchTodos: ([]) => void;
  setTodo: ({}: Todo) => void;
  updateTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],

  setFetchTodos: (array) => set({ todos: [...array] }),

  setTodo: (todoObject) => {
    const { todos } = get();
    set({
      todos: [...todos, todoObject],
    });
  },

  updateTodo: (id) => {
    const { todos } = get();
    set({
      todos: todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? (todo.completed = !todo.completed) : todo.completed,
      })),
    });
  },

  removeTodo: (id) => {
    const { todos } = get();
    set({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  },
}));
