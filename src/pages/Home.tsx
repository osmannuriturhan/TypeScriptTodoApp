import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { useState } from "react";
import axios from "axios";

interface ITodoType {
  id: string | number;
  isDone: boolean;
  task: string;
  todo?: string;
}

const Home = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const { data } = await axios("");
    } catch (error) {}
  };

  return (
    <Container>
      <Typography>TodoApp with TypeScript</Typography>
      <AddTodoComp />
      <TodoList />
    </Container>
  );
};

export default Home;
