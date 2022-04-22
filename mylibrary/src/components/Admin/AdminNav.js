import React from 'react'



export default function AdminNavbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >Admin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
                    <li className="nav-item">
                    <a className="nav-link active" href="/booklist">BookList</a>
                    </li>
                </ul>

                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Students</a>
                    </li>
                </ul>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Librarians</a>
                    </li>
                </ul> */}

                <ul className="navbar-nav me-right mb-2 mb-lg-0">    
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Logout</a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
}

