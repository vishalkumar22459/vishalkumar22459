import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import BookList from './components/BookList/BookList';
import Student from './components/Student/student'
import Librarian from './components/Librarian';
import Admin from './components/Admin/admin';
import StudentNavbar from './components/Student/StudentNavbar'
import Books from './components/Student/books';
import LibrarianDashboard from './components/Librarian/LibrarianDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Signup from './components/Signup/signup';
import Test from './components/test/test'
import AddBook from './components/Librarian/AddBook';
import AdminRegister from './components/Admin/AdminRegister';
import AllStudents from './components/Admin/AllStudents';
import AllLibrarians from './components/Admin/AllLibrarians';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/Librarian' element={<Librarian/>} />
      <Route exact path='/student' element={<Student/>} />
      <Route exact path='/Admin' element={<Admin/>} />
      <Route exact path='/booklist' element={<BookList/>} />
      <Route exact path='/admindashboard' element={<AdminDashboard/>} />
      <Route exact path='/librariandashboard' element={<LibrarianDashboard/>} />
      <Route exact path='/studentdashboard' element={<StudentDashboard/>} />
      <Route exact path='/test' element={<Test/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/studentnavbar' element={<StudentNavbar title={"Student"}/>} />
      <Route exact path='/addbook' element={<AddBook/>} />
      <Route exact path='/books' element={<Books/>} />
      <Route exact path='/adminregister' element={<AdminRegister/>} />
      <Route exact path='/allstudents' element={<AllStudents/>} />
      <Route exact path='/alllibrarians' element={<AllLibrarians/>} />
    </Routes>
    
    </>
  );
}

export default App;
