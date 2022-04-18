import React from 'react'
import StudentNavbar from './StudentNavbar';
import { useLocation} from 'react-router-dom';
// import axios from 'axios';


export default function Student(){
    const location = useLocation();
    console.log(location.state)
    var arr= location.state
    console.log(arr[0])

    // useEffect(()=>{


    // },[])
    
    

    return(
        <>
        <StudentNavbar title={"Student"}/>
        <div className ="stud-dashboard" name="stud-dashboard">
            <h1 className='stud-title'>Student Dashboard</h1>
            <section className='student-info'> 
                <h3>My-Details</h3>  
                <div>
                    <p>Name :{arr[0]}</p>
                </div>
                <div>
                    <p>Email : {arr[1]}</p>
                </div>
                <div>
                    <p>Contact : {arr[2]}</p>
                </div>
                <div>
                    <p>Role : {arr[3]}</p>
                </div>
                <div>
                    <p>Address : {arr[4]}</p>
                </div>
            </section>
            <section className=''>

            </section>
            
            
        </div>
        </>
    );
}