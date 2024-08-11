import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import Form from './Components/Form';
import Quiz from "./Components/Quiz"
import Profile from './Components/Profile';
function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/form' element={<Form />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/dashboard' element={<Profile />} />

        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;

//bta bhai
