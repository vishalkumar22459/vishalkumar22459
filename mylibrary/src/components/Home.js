import React from 'react'
import Navbar from './Navbar';
import Signin from './SignIn';


export default function homePage(){
    return(
        <>
        <Navbar title={"MyLibrary"}/> 
        <div className='h-bg'>
            <Signin/>
         </div>
    
               
        </>
        
    );   
}