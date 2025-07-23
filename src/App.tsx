import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NSF from './pages/NSF.tsx';
import RedPages from './pages/RedPages.tsx';
import RPIDorms from './pages/RPIDorms.tsx';

function App() {

  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nsf" element={<NSF />} />
      <Route path="/redpages" element={<RedPages />} />
      <Route path="/rpidorms" element={<RPIDorms />} />
    </Routes>
  );
}

export default App;
