import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO + NAMA */}
      <div className="flex items-center gap-3">
        <img src={logo} className="w-10 h-10 object-contain" />

        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
          Wacana Team
        </h1>
      </div>

      {/* MENU */}
      <div className="flex gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-pink-400 transition">Home</Link>
        <Link to="/team" className="hover:text-pink-400 transition">Team</Link>
        <Link to="/profiles" className="hover:text-pink-400 transition">Profiles</Link>
        <Link to="/connect" className="hover:text-pink-400 transition">Connect</Link>
      </div>

    </div>
  );
}