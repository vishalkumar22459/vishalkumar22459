import React from 'react'
import StudentNavbar from './StudentNavbar';
import { useLocation} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Student(){
    const location = useLocation();
    // console.log(location.state)
    var arr= location.state
    // console.log(arr[0])

    const [book , setBook] = useState('');
    const [author , setAuthor] = useState('');
    const [message , setMessage] = useState('');
    const [book1 , setBook1] = useState('');
    const [author1 , setAuthor1] = useState('');


    // useEffect(()=>{


    // },[])
    async function handleSubmit (){
        if(book == '' || author == ''){
            window.alert("fill the data")
        }
        else{
            const data = {
                "bookname": book,
                "author":author
            }
            // console.log("butoon pressed "+data.bookname+data.author)
           await axios.post("http://localhost:4000/student", data)
            .then(response=>{
                setBook1(response.data.bookname)
                setAuthor1(response.data.author)
                setMessage(response.data.msg)
                // console.log(book1+"  "+author1+"  "+message)
            })
            .catch(e=>{
                if(e) throw e;
            })

            
        }
    }  
    

    return(
        <>
        <StudentNavbar title={"Student"}/>
        <div className ="row" name="stud-dashboard">
            <h1 className='stud-title'>Student Dashboard</h1>
            <section className='student-info'> 
                <h3 className='heading'>My-Details</h3>  
                <div>
                    <p>Name :{arr[0]}</p>
                </div>
                <div>
                    <p>Email : {arr[1]}</p>
                </div>
                <div>
                    <p>Contact : {arr[2]}</p>
                </div>
                <div>
                    <p>Role : {arr[3]}</p>
                </div>
                <div>
                    <p>Address : {arr[4]}</p>
                </div>
            </section>
            <section className='borrow-book'>
                <div>
                    <h3 className='heading'> Borrow Book</h3>
                    <div>
                        <label htmlFor="">BookName</label>
                        <input type="text" value={book} onChange={(e)=>setBook(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Author </label>
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Find</button>
                    </div>
                </div>
                <div>
                    {message}
                </div>
            </section>
        </div>
        
        </>
    );
}