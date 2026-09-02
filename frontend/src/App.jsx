import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/Navbar/Navbar';
import Topnavbar from './components/Topnavbar/Topnavbar';
import Dashboard from './screens/Dashboard/Dashboard';
import Addhome from './screens/Addhome/Addhome';
import Houses from './screens/Houses/Houses';
import{Routes, Route}from'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Addhome' element={<Addhome/>}/>
      <Route path='/Houses' element={<Houses/>}/>

    </Routes>
  );
}

export default App;