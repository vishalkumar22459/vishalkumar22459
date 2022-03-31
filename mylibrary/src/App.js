import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home";
import RegisterPage from './components/Register';
import BookList from './components/BookList';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/Blist' element={<BookList/>} />
    </Routes>
    
     {/* <RegisterPage/>*/}
    </>
  );
}

export default App;
