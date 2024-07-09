
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Episodespage from './pages/episodespage';

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Inicio' element={<Home/>} />
        <Route path='/Episodios' element={<Episodespage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
