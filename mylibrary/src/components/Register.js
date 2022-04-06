import React, {useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import validator from 'validator';

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');
    const [pass1,setPass1] = useState('');
    const [pass2,setPass2] = useState('');

    const [emailError, setEmailError] = useState('');

    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
          setEmailError('Enter valid Email!')
        }
      }

    function handleSubmit(e){
        e.preventDefault();

        if(pass1 !== pass2){
            window.alert("password mismatch!  TRY AGAIN");
        }else{
            console.log("register button clicked");
            const regdata = {
                name: name,
                email: email,
                role: role,
                contact: contact,
                address: address,
                pass: pass1
            }
            axios.post("http://localhost:4000/register",regdata)
            .then(Response =>{
                console.log(Response);
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    }
    
    return(
        <>
        <Navbar title={"MyLibrary"}/> 
        <div className="my-form">
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">Register
                            </div>
                                <div className="card-body">
                                <form name="my-form" >
                                        <div className="form-group row">
                                            <label htmlFor="full_name"  className="col-md-4 col-form-label text-md-right">Full Name</label>
                                            <div className="col-md-6">
                                                <input type="text" placeholder='Enter your FullName Here' id="full_name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" name="full-name"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="email_address"  className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" placeholder='demo@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} onKeyPress={validateEmail} className="form-control" name="email-address"/>
                                                <span style={{
                                                color: 'red',
                                                fontSize:15
                                                }}>{emailError}</span>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="role" className="col-md-4 col-form-label text-md-right">Role</label>
                                            <div className="col-md-6">
                                            <select name="role" value={role} onChange={(e)=> setRole(e.target.value) } className="form-control form-control-m" id="typeRoleX-2">
                                                <option>Select</option>
                                                <option>Student</option>
                                                <option >Admin</option> </select>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="phone_number" className="col-md-4 col-form-label text-md-right">Phone Number</label>
                                            <div className="col-md-6">
                                                <input type="text" id="phone_number" placeholder='Enter your 10 digit mobile no.' value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="present_address" className="col-md-4 col-form-label text-md-right">Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="present_address" placeholder='Your current address' value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="permanent_address" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" placeholder='your password please' value={pass1} onChange={(e)=>setPass1(e.target.value)} className="form-control" name="password"/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="permanent_address" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="confirm_password" placeholder='your password please' value={pass2} onChange={(e)=>setPass2(e.target.value)} className="form-control" name="confirm-password"/>
                                            </div>
                                        </div>
        
                                        
                                            <br></br>
                                            <div className="col-md-4 offset-md-5">
                                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                                Register
                                                </button>
                                            </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>  
    );
}