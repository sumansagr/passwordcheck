
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Register from './component/Register';
import Home from './component/Home';
import Login from './component/Login';



function App() {
   
  return (
    
   <Router>
      <div className="App">
       <div className='App-link'>
      <Link to="/home"> Home</Link>
      <Link to="/login"> Login</Link>
      <Link to="/register"> Register </Link>
        </div>
        <Route path="/home"  component={Home}/>
        <Route path="/login"  component={Login}/>
        <Route path="/register"  component={Register}/>
     </div>
   </Router>
  );
}

export default App;

