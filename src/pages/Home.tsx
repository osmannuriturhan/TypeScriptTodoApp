import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  id: string | number;
  isDone: boolean;
  task: string;
  todo?: string;
}

const url: string = import.meta.env.VITE_BASE_URL;

const Home = () => {
  //   const [todos, setTodos] = ((useState < []) as ITodoType) > []; //* type tanımlaması 1.yol fakat çok fazla tercih edilmiyor.
  //   const [todos, setTodos] = useState<Array<ITodoType>>([]); //* type tanımlaması 2.yol
  const [todos, setTodos] = useState<ITodoType[]>([]); //* type tanımlaması 3.yol en çok kullanılan

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   const addTodo = async (text: string) => {
  //     try {
  //     } catch (error) {}
  //   };

  //   type AddFn = (text: string) => Promise<void>;

  const addTodo: AddFn = async (text) => {
    try {
      await axios.post(url, { task: text, isDone: false });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Typography
        color="error"
        align="center"
        variant="h2"
        component="h1"
        onClick={() => setTodos([{ id: 1, isDone: false, task: "asdasd" }])}
      >
        TodoApp with TypeScript
      </Typography>
      <AddTodoComp addTodo={addTodo} />
      <TodoList />
    </Container>
  );
};

export default Home;
