import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Architecture from './pages/Architecture'
import Advertisment from './pages/Advertisment'
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="arch" element={<Architecture />} />
        <Route path="ad" element={<Advertisment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
