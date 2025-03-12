import { RecoilRoot } from "recoil";
import TodoList from "../ToDoList";
import AddTodo from "../AddTodo";

export default function App() {
  return (
    <RecoilRoot>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </RecoilRoot>
  );
}
