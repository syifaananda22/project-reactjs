// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team"; // tambah halaman Team
import Profiles from "./pages/Profiles"; // opsional, kalau mau halaman Profiles
import Connect from "./pages/Connect";   // opsional, kalau mau halaman Connect
import Syifa from "./pages/Syifa";
import Wawa from "./pages/Wawa";
import Evellyn from "./pages/Evellyn";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* TEAM */}
        <Route path="/team" element={<Team />} />

        {/* PROFILES */}
        <Route path="/profiles" element={<Profiles />} />

        {/* CONNECT */}
        <Route path="/connect" element={<Connect />} />

        {/* PROFILE INDIVIDUAL */}
        <Route path="/syifa" element={<Syifa />} />
        <Route path="/wawa" element={<Wawa />} />
        <Route path="/evellyn" element={<Evellyn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;