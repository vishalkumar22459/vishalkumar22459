import React from 'react'
import { Link} from "react-router-dom";
 export default function SignIn(){
     
     return(
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-6 col-md-6 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                    <div className="card-body p-3 text-center">

                        <h3 className="mb-1">Sign in</h3>

                        <div className="form-outline mb-0">
                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                        <input type="email" id="typeEmailX-2" className="form-control form-control-m" />
                        </div>

                        <div className="form-outline mb-0">
                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                        <input type="password" id="typePasswordX-2" className="form-control form-control-m" />
                        </div>

                        <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="typePasswordX-2">Role</label>
                        <input type="text" id="typeEmailX-2" className="form-control form-control-m" />
                        </div>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        
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