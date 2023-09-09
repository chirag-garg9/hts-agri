
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Home/Home';
import Community from './Components/Community/Community';
import Innovation from './Components/Innovation/Innovation';
import Newsss from './Components/News/Newsss';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './Components/LoginAndsignup/Signup';
import SignInSide from './Components/LoginAndsignup/Login';
import Footer from './Components/Footer/Footer';
import Msp from './Components/MSP/Msp';
import Bot from './Components/Bot/Bot';





function App() {
  return (
    <>    
     <Router>
     <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/innovation' element={<Innovation/>} />
        <Route path='/news' element={<Newsss/>} />
        <Route path='/msp' element={<Msp/>} />
        <Route key={"login"} path='/login' element={<SignInSide/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
     <Footer/>
      <Bot/>
     </Router>

     
    </>
  );
}

export default App;
