import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home"
import RegisterPage from './components/Register';



function App() {
  return (
    <>
    <Routes>
      <Route path='/about' element={<RegisterPage/>} />
    </Routes>
    <Home/>
     {/* <RegisterPage/>*/}
    </>
  );
}

export default App;
