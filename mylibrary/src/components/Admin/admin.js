import React from 'react'
import Navbar from '../Navbar';

export default function(){
    return(
        <>
        <Navbar title={"Admin"}/>
        <div className ="admin-dashboard" name="admin-dashboard">
            <h1 className='admin-title'>Admin Dashboard</h1>
            <div className="admin-detail" name="admin-detail" >
                detail
            </div>
            <div className="book-issued" name="book-issued">
                issued-book
            </div>
            <div className="all-students" name="all-students">
                allstudents
            </div>
            <div className="all-librarians" name="all-librarians">
                All librarians
            </div>
        </div>
        </>
    );
}