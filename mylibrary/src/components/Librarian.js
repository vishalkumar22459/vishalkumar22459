import React from 'react'
import Navbar from './Navbar';
import TodoList from './TodoList';
import { useLocation} from 'react-router-dom';

export default function Librarian(){

    const location = useLocation();
    console.log(location.state)

    return(
        // <div className='todo'>
        //     <TodoList/>
        // </div>
        <>
            <Navbar title={"Librarian"}/>
            <div className='librarian-dashboard'>
                {/* <p>abx</p> */}
                <div className='librarian-detail'>
                    <p>Now user "{location.state}" is logged in</p>
                    {/* <p>Username:</p> */}
                </div>
            </div>
            <TodoList />
        </>
    );
}