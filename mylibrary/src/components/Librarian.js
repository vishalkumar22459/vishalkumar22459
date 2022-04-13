// import React from 'react'
import Navbar from './Navbar';
import TodoList from './TodoList';
import { useLocation} from 'react-router-dom';

import React ,{useState}from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function Librarian(){

    const location = useLocation();
    // console.log(location.state) //email from sign in


    const [todos , setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        // console.log(...todos +"check");
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id )
        setTodos(removeArr);
    }


    const completeTodo = id => {
        // id.preventDefault()
        let updatedTodods = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodods)
    }

    return(
        // <div className='todo'>
        //     <TodoList/>
        // </div>
        <>
            <Navbar title={"Librarian"}/>
            <div className='librarian-dashboard'>
                <div className='librarian-detail'>
                    <p>Now user "{location.state}" is logged in</p>
                </div>
            </div>

            <div className='add-books'>
                 <h1 className='todoh1'>Add Books to Library's Booklist</h1>
                <TodoForm onSubmit={addTodo}/>
            </div>


            <div className='lib-user-details'>
                <h1 className='todoh1'>Newly Added Books</h1>
                <Todo  todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
            </div>
        </>
    );
}