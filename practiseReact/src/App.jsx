import Todo from "../../reduxToolkitTodo/src/components/Todo";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <AddTodo/>
      <Todo/>
    </>
  );
}

export default App;
