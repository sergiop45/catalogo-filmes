import { Outlet} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

//eb6c4dc9948afa01b5b1fa3c29755b2e
//https://api.themoviedb.org/3/movie/550?api_key=eb6c4dc9948afa01b5b1fa3c29755b2e


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
    
  )
}

export default App
