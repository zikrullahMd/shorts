import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Business from './Components/Business'
import Latest from './Components/Latest'
import Sports from './Components/Sports'
import Politics from './Components/Politics'
import Home from './Components/Home'
import Technology from './Components/Technology'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/Latest" component={Latest} />
        <Route path="/Sports" component={Sports}/>
        <Route path="/Business" component={Business}/>
        <Route path="/Politics" component={Politics}/>
        <Route path="/Technology" component={Technology}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
