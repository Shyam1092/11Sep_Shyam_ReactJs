import { useRecoilState } from "recoil";
import { todoListState } from "./atom";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => toggleComplete(index)}>✔</button>
          <button onClick={() => removeTodo(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
