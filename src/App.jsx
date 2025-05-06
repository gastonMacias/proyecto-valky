
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateCompo from "../src/context/StateCompo"
import CarritoProvider from './context/carritoProvider';

import './App.css'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import CuadernosA4 from './pages/CuadernosA4';
import CuadernosA5 from './pages/CuadernosA5';
import Anotadores from './pages/Anotadores';
import LibrosParaColorear from './pages/LibrosParaColorear';
import Agendas2025 from './pages/Agendas2025';
import AgendasPerpetuas from './pages/AgendasPerpetuas';
import AgendasDocentes from './pages/AgendasDocentes';
import CuadernillosDocentes from './pages/CuadernillosDocentes';
import CuadernosIngegr from './pages/CuadernosIngEgr';
import StickersComunes from './pages/StickersComunes';
import StickersBlancos from './pages/StickersBlancos';
import StickersTransparentes from './pages/StickersTransparentes';
import StickersHolograficos from './pages/StickersHolograficos';
import TablasMultiplicar from './pages/TablasMultiplicar';
import PlannersMensuales from './pages/PlannersMensuales';
import PlannersSemanales from './pages/PlannersSemanales';
import HorariosEscolares from './pages/HorariosEscolares';
import HorariosSemanales from './pages/HorariosSemanales';
import Plastificados from './pages/Plastificados';





function App() {

  return (
    <>
      <StateCompo>
        <BrowserRouter>
          <CarritoProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cuadernosA4' element={<CuadernosA4 />} />
              <Route path='/cuadernosA5' element={<CuadernosA5 />} />
              <Route path='/anotadores' element={<Anotadores />} />
              <Route path='/libros_para_colorear' element={<LibrosParaColorear />} />
              <Route path='/agendas2025' element={<Agendas2025 />} />
              <Route path='/agendas_perpetuas' element={<AgendasPerpetuas />} />
              <Route path='/agendas_docentes' element={<AgendasDocentes />} />
              <Route path='/cuadernillos_docentes' element={<CuadernillosDocentes />} />
              <Route path='/cuaderno_ingresos_egresos' element={<CuadernosIngegr />} />
              <Route path='/stickers_comunes' element={<StickersComunes />} />
              <Route path='/stickers_blancos' element={<StickersBlancos />} />
              <Route path='/stickers_transparentes' element={<StickersTransparentes />} />
              <Route path='/stickers_holograficos' element={<StickersHolograficos />} />
              <Route path='/tablas_de_multiplicar' element={<TablasMultiplicar />} />
              <Route path='/planners_mensuales' element={<PlannersMensuales />} />
              <Route path='/planners_semanales' element={<PlannersSemanales />} />
              <Route path='/horarios_escolares' element={<HorariosEscolares />} />
              <Route path='/horarios_semanales' element={<HorariosSemanales />} />
              <Route path='/plastificados' element={<Plastificados />} />
            </Routes>
            <Footer />
          </CarritoProvider>
        </BrowserRouter>
      </StateCompo>
    </>
  )
}

export default App



