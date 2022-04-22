import React from 'react'
import AdminNavbar from './AdminNav';
import { useLocation , Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import Register from '../Register'

export default function Admin(){

    const location = useLocation();
    var Aarr= location.state
    const [email , setEmail] = useState('');
    const [msg , setMsg] = useState('');
    // console.log(msg);
    async function handleRemoveUser(){
        // console.log(email)
        if(!email){
           setMsg("email is empty")
        }
        else{
            const obj ={
                email:email
            }
            await axios.post("http://localhost:4000/Admin",obj)
            .then(response=>{
                // console.log(response.data.msg)
                setMsg(response.data.msg)
            })
            .catch(e=>{
                if(e) throw e;
            })
        }
        setEmail('')
    }

    return(
        <>
        <AdminNavbar/>
        <div className ="row" name="admin-dashboard">
            {/* <h1 className='admin-title'>Admin Dashboard</h1> */}
            <section className='admin-info'>
                <h3 className="heading">MyDetails</h3>
                <div className='my-details'>
                    <div>
                        <p>Name :{Aarr[0]}</p>
                    </div>
                    <div>
                        <p>Email : {Aarr[1]}</p>
                    </div>
                    <div>
                        <p>Contact : {Aarr[3]}</p>
                    </div>
                    <div>
                        <p>Role : {Aarr[2]}</p>
                    </div>
                </div>
                
            </section>
            <section className="remove-user">
                <h3 className='heading'>Remove User</h3>
                <div >
                      <label htmlFor="email"  className="col-sm-2 col-form-label">Email</label>
                      <div>
                        <input type="text" placeholder='user email'  value={email} onInput={(e)=>setEmail(e.target.value)} />
                      </div>
                </div>
                <br />
                <div>
                    <button onClick={handleRemoveUser} className='btn btn-outline-primary'>
                        Remove User
                    </button>
                </div>
                <br />
                <div className='msg'>
                    {msg}
                </div>
            </section>
            <section className='admin-add-user'>
                <div>
                    <h3 className='heading'>Add User here</h3>
                    <div className='heading ' style={{color : "red"}}>
                        <Link to="/register">Click me to register</Link>
                        {/* <Register/> */}
                    </div>
                </div>
            </section>
            <section className='admin-add-user'>
                <div>

                </div>
            </section>
            
        </div>
        </>
    );
}