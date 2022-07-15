import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="experience" element={<Outlet />} />
        <Route path="projects" element={<Outlet />} />
        <Route path="contact" element={<Outlet />} />
      </Route>
    </Routes>
  );
}

export default App;
