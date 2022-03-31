import React from 'react'
import Navbar from './Navbar';

export default function Register(){
    return(
        <>
        <Navbar title={"MyLibrary"}/> 
        <main class="my-form">
            <div className="cotainer">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">Register
                            </div>
                                <div className="card-body">
                                <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                                        <div className="form-group row">
                                            <label htmlFor="full_name" className="col-md-4 col-form-label text-md-right">Full Name</label>
                                            <div className="col-md-6">
                                                <input type="text" id="full_name" className="form-control" name="full-name"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlFor="user_name" className="col-md-4 col-form-label text-md-right">User Name</label>
                                            <div className="col-md-6">
                                                <input type="text" id="user_name" className="form-control" name="username"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlhtmlFor="phone_number" className="col-md-4 col-form-label text-md-right">Phone Number</label>
                                            <div className="col-md-6">
                                                <input type="text" id="phone_number" className="form-control"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlhtmlFor="present_address" className="col-md-4 col-form-label text-md-right">Present Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="present_address" className="form-control"/>
                                            </div>
                                        </div>
        
                                        <div className="form-group row">
                                            <label htmlhtmlFor="permanent_address" className="col-md-4 col-form-label text-md-right">Permanent Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="permanent_address" className="form-control" name="permanent-address"/>
                                            </div>
                                        </div>
        
                                        
                                            <br></br>
                                            <div className="col-md-4 offset-md-5">
                                                <button type="submit" className="btn btn-primary">
                                                Register
                                                </button>
                                            </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
        </>  
    );
}