import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App'
import Home from './pages/Home/Home';
import Busca from './pages/Busca';
import Filme from './pages/Filme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='filme/:id' element={<Filme />} />
          <Route path='/busca' element={<Busca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
