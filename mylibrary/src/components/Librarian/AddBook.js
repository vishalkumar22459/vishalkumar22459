import "../../Css/Dashboard.css"
import React,{useState} from 'react'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LibrarianDashboard(){
    const [email , setEmail]=useState('')
    // const { email} = props
    // console.log(email)

    const [isActive, setActive] = useState("false");
    const location = useLocation();
    


    function handleToggle(){
        setActive(!isActive);
        // console.log("clicked "+isActive)
    }
    return(
        <>
        <div>
            <div className="wrapper">
                {/* <!-- Sidebar  --> */}
                <nav id="sidebar" style={isActive ? {} :{margin: "0 0 0-250px"}}>
                    <div className="sidebar-header" >
                        <h3>Welcome To Library </h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Librarian Page</p>
                        <li >
                        <Link to={`/librariandashboard`} 
                        state={location.state}>Books
                        </Link>
                        </li>
                        <li className="active">
                            <a>Add Book</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* <ul className="list-unstyled CTAs">
                        <li>
                            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                        </li>
                        <li>
                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                        </li>
                    </ul> */}
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
                                <i className="fas fa-align-justify"></i>
                                <a href="/" >LogOut</a>
                            </button>
                
                        </div>
                    </nav>


                    <div>{location.state}</div>




























                </div>
            </div>
        </div>
        </>
    );
}