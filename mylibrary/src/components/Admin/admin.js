import React from 'react'
import AdminNavbar from './AdminNav';
import { useLocation} from 'react-router-dom';

export default function Admin(){

    const location = useLocation();
    var Aarr= location.state
    // console.log(/Aarr);
    

    return(
        <>
        <AdminNavbar/>
        <div className ="admin-dashboard" name="admin-dashboard">
            <h1 className='admin-title'>Admin Dashboard</h1>
            <div className="admin-detail" name="admin-detail" >
                <h3>My-Details</h3>
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