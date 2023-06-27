import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Features, Home, Pricing, Stories } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Stories" element={<Stories />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/Pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;