import { todo } from "node:test";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  let dispatch = useDispatch();

  return (
    <>
      <div>
        My Todos List
      </div>
      {
        todos.map((todo)=> (
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>Remove</button>
            </li>
        ))
      }
    </>
  );
}

export default Todo;
