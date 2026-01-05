import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Villas from "./pages/Villas";
import Jeeps from "./pages/Jeeps";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinasi" element={<Destinations />} />
      <Route path="/villa" element={<Villas />} />
      <Route path="/jeep" element={<Jeeps />} />
    </Routes>
  );
}

export default App;
