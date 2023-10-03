import './App.css';
import Home from './Pages/Landing';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Other from './Pages/Other';


function App() {
  return (

    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path = '/'  element = {<Home></Home>} />
          <Route path = '/Other' element = {<Other/>} />
        </Routes>
      </Router>
      
    </>

  );
}

export default App;
