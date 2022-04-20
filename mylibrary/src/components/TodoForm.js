import React, {useState} from 'react'
import { useLocation} from 'react-router-dom';
import axios from 'axios';


function TodoForm(props) {
    const[book, setbook] = useState('')
    const[author, setauthor] = useState('')
    const location = useLocation();
    // console.log(location.state)

    const handleChange = e =>{
        setbook(e.target.value);
    }
    const Change = e1 =>{
        setauthor(e1.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text: book +" " + author
            
        });
        // console.log(location.state +" "+book+" "+author)
        const bookdata = {
            email: location.state ,
            bookname: book,
            author: author
        }
        if(book!=='' & author !==''){
            axios.post('http://localhost:4000/librarian',bookdata)
            .then(response =>{

            })
            .catch(error => {
                if(error) throw error;
            })
        }
        setbook('');
        setauthor('');
    }
    

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <div>
        <input type="text" 
        placeholder='BookName' 
        value={book} 
        name='text'
        className='form-control-lg'
        onChange={handleChange}
        />
        </div>
        
        <div>
        <input type="text" 
        placeholder='author' 
        value={author} 
        name='text'
        className='form-control-lg'
        onChange={Change}
        />
        </div>
        <div>
            <button className='btn-lg btn-outline-success'>Add</button>
        </div>
    </form>
  )
}

export default TodoForm
