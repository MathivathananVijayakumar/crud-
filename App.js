
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (<>
  <BrowserRouter>
  <NavLink to='/Post'>Post</NavLink>
  <Route path ="/Post"><Post/>
    </Route>
  </BrowserRouter>
  
  </>
  )
}

export default App;
