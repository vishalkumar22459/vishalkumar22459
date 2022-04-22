import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import RegisterPage from './components/Register';
import BookList from './components/BookList/BookList';
import Student from './components/Student/student'
import Librarian from './components/Librarian';
import Admin from './components/Admin/admin';
import StudentNavbar from './components/Student/StudentNavbar'
import LibNavbar from './components/Librarian/libNavbar';
import Test from './components/test/test'
import LibrarianDashboard from './components/Librarian/LibrarianDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/Librarian' element={<Librarian/>} />
      <Route exact path='/student' element={<Student/>} />
      <Route exact path='/Admin' element={<Admin/>} />
      <Route exact path='/booklist' element={<BookList/>} />
      <Route exact path='/admindashboard' element={<AdminDashboard/>} />
      <Route exact path='/librariandashboard' element={<LibrarianDashboard/>} />
      <Route exact path='/studentdashboard' element={<StudentDashboard/>} />
      <Route exact path='/test' element={<Test/>} />
      <Route exact path='/studentnavbar' element={<StudentNavbar title={"Student"}/>} />
      <Route exact path='/lib' element={<LibNavbar/>} />
    </Routes>
    
    </>
  );
}

export default App;
