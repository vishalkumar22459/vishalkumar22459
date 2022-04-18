import axios from 'axios'
import React,{useEffect,useState} from 'react'
// import Todo from '../Todo'
import * as ReactBootsrap from 'react-bootstrap'
// import axios from 'axios'


export default function Test(){
    
    const books =[
        { bookname:"math" , author:"kumar" },
        { bookname:"mh" , author:"kar" },
        { bookname:"thje" , author:"dckjdmar" }
    ]
    
    // const [book , setbook ] = useState()
    // const [author , setauthor ] = useState()
    
    // axios.get('http://localhost:4000/test')
    // .then(response =>{
    //     console.log(response.data.book)
    //     console.log(response.data.author)
    // })
    

    const renderBook =(book, index)=>{
        return(
            <tr key={index}>
                <td>{book.bookname}</td>
                <td>{book.author}</td>
            </tr>
        )
    }

    return(
        <div>
            <h1>BookList</h1>
            <ReactBootsrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>book</th>
                    <th>author</th>
                </tr>
            </thead>
            <tbody>
                {books.map(renderBook)}
            </tbody>
            </ReactBootsrap.Table>
        </div>
    );
}