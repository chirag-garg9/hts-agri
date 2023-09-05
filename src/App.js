
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Community from './Components/Community/Community';
import Innovation from './Components/Innovation/Innovation';
import News from './Components/News/News';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
     
     <Router>
     <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/BOT' element={<Home/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/innovation' element={<Innovation/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
