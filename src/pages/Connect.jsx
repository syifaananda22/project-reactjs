import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Connect() {
  return (
    <div className="bg-pink-50 min-h-screen fade-in">

      <Navbar />

      <div className="max-w-xl mx-auto mt-20 text-center px-6">

        <h1 className="text-3xl font-bold text-pink-500">
          Connect With Us
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Jika ingin berkolaborasi atau mengetahui lebih lanjut tentang kami,
          silakan hubungi melalui informasi berikut.
        </p>

        {/* CONTACT CARD */}
        <div className="bg-white mt-8 p-6 rounded-2xl shadow space-y-3">

          <p className="text-gray-600">
            Email: wacanateam@email.com
          </p>

          <p className="text-gray-600">
            Instagram: @wacanateam
          </p>

          <p className="text-gray-600">
            Location: Malang, Indonesia
          </p>

        </div>

      </div>

      <Footer />
    </div>
  );
}