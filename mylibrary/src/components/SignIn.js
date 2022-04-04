
import { Link} from "react-router-dom";
import React, { useState } from "react";
import validator from 'validator';


 export default function SignIn(){

    const [emailError, setEmailError] = useState('')
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
        console.log("submit button clicked");
        
    }
     
     return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-6 col-md-6 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                    <div className="card-body p-3 text-center">

                        <h3 className="mb-1">Sign in</h3>

                        <div className="form-outline mb-0">
                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                        <input type="email" id="typeEmailX-2" className="form-control form-control-m"  onChange={(e)=> validateEmail(e)}/>
                            <span style={{
                            color: 'red',
                            fontSize:15
                            }}>{emailError}</span>
                        </div>

                        <div className="form-outline mb-0">
                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                        <input type="password" id="typePasswordX-2" className="form-control form-control-m" />
                        </div>

                        <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="typePasswordX-2">Role</label>
                        <select  className="form-control form-control-m" id="typeRoleX-2">
                        <option>Student</option>
                        <option value="">Admin</option> </select>
                        </div>

                        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>
                        
                        <Link to ='/register'>
                            <button className="btn btn-secondary btn-lg btn-block" >Register</button>
                        </Link>
                        <hr className="my-4"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
 }