
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import About from './About';

function App() {
  return (<>
 
    <BrowserRouter>
    {/* <NavLink to='/'>Home</NavLink><br/>
    <NavLink to='/About'>About</NavLink><br/> */}
    <NavLink to='/Post'>Post</NavLink>
     <Route path exact= "/">
    <Home/>
    </Route> 
  
    <Route path ="/About"><About/>
    </Route>

  
  <Route path ="/Post"><Post/>
    </Route>
  </BrowserRouter>
  
  </>
  )
}

export default App;
