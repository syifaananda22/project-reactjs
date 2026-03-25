import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Profiles() {
  return (
    <div className="bg-pink-50 min-h-screen fade-in">

      <Navbar />

      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-pink-500">
          Our Profiles
        </h1>

        <p className="text-gray-600 mt-3">
          Klik salah satu profile untuk melihat detail
        </p>
      </div>

      {/* CARD PROFILE */}
      <div className="grid md:grid-cols-3 gap-6 px-10 mt-10">

        {/* SYIFA */}
        <Link to="/Syifa">
          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 hover:shadow-xl transition text-center">
            <div className="w-20 h-20 mx-auto bg-pink-200 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold text-pink-500">Syifa</h2>
            <p className="text-gray-500 mt-1 text-sm">View Profile</p>
          </div>
        </Link>

        {/* WAWA */}
        <Link to="/Wawa">
          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 hover:shadow-xl transition text-center">
            <div className="w-20 h-20 mx-auto bg-purple-200 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold text-purple-500">Wawa</h2>
            <p className="text-gray-500 mt-1 text-sm">View Profile</p>
          </div>
        </Link>

        {/* EVELLYN */}
        <Link to="/Evellyn">
          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 hover:shadow-xl transition text-center">
            <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold text-pink-400">Evellyn</h2>
            <p className="text-gray-500 mt-1 text-sm">View Profile</p>
          </div>
        </Link>

      </div>

      <Footer />
    </div>
  );
}