import React ,{useState}from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    // e.preventDefault()
    
    const [todos , setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos);
        console.log("hey todos"+todos)
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
  return (
    <div>
        <h1 className='todoh1'>Add Books to LibraryList</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo  todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList
