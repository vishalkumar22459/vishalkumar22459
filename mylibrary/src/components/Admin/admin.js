import React from 'react'
import AdminNavbar from './AdminNav';
import { useLocation} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Admin(){

    const location = useLocation();
    var Aarr= location.state
    const [email , setEmail] = useState('');
    const [msg , setMsg] = useState('');
    // console.log(/Aarr);
    async function handleRemoveUser(){
        // console.log(email)
        if(!email){
           return console.log("!email")
        }
        const obj ={
            email:email
        }
        await axios.post("http://localhost:4000/Admin",obj)
        .then(response=>{
            console.log(response.data.msg)
            setMsg(response.data.msg)
        })
        .catch(e=>{
            if(e) throw e;
        })

        // console.log("checking"+msg)
    }

    return(
        <>
        <AdminNavbar/>
        <div className ="row" name="admin-dashboard">
            {/* <h1 className='admin-title'>Admin Dashboard</h1> */}
            <section className='admin-info'>
                
                    <h3 className="heading">MyDetails</h3>
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
                
            </section>
            <section className="remove-user">
                <h3 className='heading'>Remove User</h3>
                <div >
                      <label htmlFor="email">Email</label>
                      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleRemoveUser}>
                        Remove User
                    </button>
                </div>
                <div>
                    {msg}
                </div>
            </section>
            
        </div>
        </>
    );
}