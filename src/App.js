import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
//import {  BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <h1 className='header'>RECIPES MANAGEMENT APP</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
