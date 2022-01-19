
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Userlogin from './Userlogin';
import Adminlogin from './Adminlogin';
import Createuser from './Createuser';
import CreateAdmin from './CreateAdmin';
import Admindashboard from './Admindashboard';
import Userdashboard from './Userdashboard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user-login" element={<Userlogin />}/>
      <Route path="/admin-login" element={<Adminlogin />}/>
      <Route path="/createuser" element={<Createuser/>}/>
      <Route path="/admincreate" element={<CreateAdmin />}/>
      <Route path="/admin-dashboard" element={<Admindashboard />}/>
      <Route path="/user-dashboard" element={<Userdashboard/>}/>
      

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
