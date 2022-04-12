import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import RegisterPage from './components/Register';
// import BookList from './components/BookList';
import Student from './components/Student/student'
import Librarian from './components/Librarian';
import Admin from './components/Admin/admin'




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/Librarian' element={<Librarian/>} />
      <Route exact path='/Student' element={<Student/>} />
      <Route exact path='/Admin' element={<Admin/>} />
    </Routes>
    
     {/* <RegisterPage/>*/}
    </>
  );
}

export default App;
