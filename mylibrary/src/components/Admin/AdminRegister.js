import "../../Css/Dashboard.css"
import { useLocation } from "react-router-dom";
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Signup from '../Signup/signup'

export default function AdminRegister(){
    const [isActive, setActive] = useState("false");
    const [email , setEmail] = useState('');
    const location = useLocation();
   
    
    

    
        


    
    
    






    function handleToggle(){
        setActive(!isActive);
    }
    return(
        // style={{margin: "0 0 0-250px"}}
        <>
        <div>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" style={isActive ? {} :{margin: "0 0 0-250px"}}>
                    <div className="sidebar-header" >
                        <h3>Welcome To Library </h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Admin Page</p>
                        <li >
                            <Link to={`/admindashboard`} 
                            state={location.state}>Home
                            </Link>
                        </li>
                        <li className="active">
                            <a> Register user</a>
                        </li>
                        <li>
                            <Link to={`/allstudents`} 
                            state={location.state}>Students
                            </Link>
                        </li>
                        <li>
                            <Link to={`/alllibrarians`} 
                            state={location.state}>Librarians
                            </Link>
                        </li>
                        <li>
                            <a> Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* <!-- Page Content  --> */}
                <div id="content">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={handleToggle}>
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>
                            <button className="btn btn-dark "  type="button" >
                                <i class="fas fa-align-justify"></i>
                                <a href="/" >LogOut</a>
                            </button>
                
                        </div>
                    </nav>

                    <div>{location.state}</div>
                    <div>
                        
                    </div>




























                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div className="line"></div>

                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        </div>
        </>
    );
}