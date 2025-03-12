import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atom";


export default function AddTodo() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((oldTodos) => [...oldTodos, { text, completed: false }]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task..." />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
