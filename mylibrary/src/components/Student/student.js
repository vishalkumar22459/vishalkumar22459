import React from 'react'
import Navbar from '../Navbar';


export default function(){
    return(
        <>
        <Navbar title={"Student"}/>
        <div className ="stud-dashboard" name="stud-dashboard">
            <h1 className='stud-title'>Student Dashboard</h1>
            <div className="stud-detail" name="stud-detail" >
                detail
            </div>
            <div className="book-issued" name="book-issued">
                issued-book
            </div>
        </div>
        </>
    );
}