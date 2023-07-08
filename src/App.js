
import { BrowserRouter as Router,
Routes,Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// Navbar
import BlockDetail from './components/BlockDetail';
import './App.css';

import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
    <Router >
   {/* <Navbar/> */}
    <Routes>
      
    
    <Route exact path="/" element={<Home/>}/>
    
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/blockdetail" element={<BlockDetail/>}/>
   </Routes>
      
      </Router>
  );
}

export default App;
