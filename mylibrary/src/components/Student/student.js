import React from 'react'
import StudentNavbar from './StudentNavbar';
import { useLocation} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";


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
    const [show, setShow] = React.useState(false)
    const [editname , setEditname] = useState('');
    const [editemail , setEditemail] = useState('');
    const [editcontact , setEditcontact] = useState('');


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

    function handleEdit(){
        setShow(true)
    }

    function updateChange(){
        setShow(false)
        console.log("clicked change button")
        const obj ={
            "name" : editname
        }
        axios.post("http://localhost:4000/changename",obj)
        .then(response => {

        })
        .catch(e => {
            if(e) throw e;
        })
    }
    
    

    return(
        <>
        <StudentNavbar title={"Student"}/>
        <div className ="row" name="stud-dashboard">
            {/* <h1 className='stud-title'>Student Dashboard</h1> */}
            <section className='student-info'> 
                <h3 className='heading'>My-Details</h3>  
                <div className='my-details-student'>
                    <div>
                        <p>Name :{arr[0]} <FaEdit onClick={handleEdit}/></p>
                        {show ? 
                        <div>
                            <input type="text" value={editname} onChange={e=> setEditname(e.target.value)}  />
                            <button onClick={updateChange}>Update</button>
                        </div>
                        : null}
                        
                        
                    </div>
                    <div>
                        <p>Email : {arr[1]} <FaEdit /></p>
                    </div>
                    <div>
                        <p>Contact : {arr[3]} <FaEdit /></p>
                    </div>
                    <div>
                        <p>Role : {arr[2]} </p>
                    </div>
                    <div>
                        <p>Address : {arr[4]} <FaEdit /></p>
                    </div>
                </div>
            </section>
            <section className='borrow-book'>
                <h3 className='heading'> Borrow Book</h3>
                <form >
                    <div className='stud-form'>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">BookName</label>
                            <div >
                            <input type="text" className='form-control-sm' value={book} onChange={(e)=>setBook(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-2 col-form-label">Author </label>
                            <div className='"col-sm-10"'>
                                <input type="text" className='form-control-sm' value={author} onChange={(e)=>setAuthor(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-sm-2 col-form-label">
                            <button className="btn btn-primary" onClick={handleSubmit}>Find</button>
                        </div>
                    </div>
                </form>
                <div>
                    {message}
                </div>
            </section>
            {/* <section className='x'>
                <p>
                   
                </p>me-right
            </section> */}
        </div>
        
        </>
    );
}