import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Proyectos from './pages/Proyectos';
import Home from './pages/Home';
import NuestrosProyectos from './pages/NuestrosProyectos';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import Login from './components/Auth/Login';
import FormEditar from './components/Proyectos/FormEditar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/nuestros-proyectos' element={<NuestrosProyectos/>}/>
          <Route path='/sobre-nosotros' element={<SobreNosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/proyectos/editar/:id' element={<FormEditar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
