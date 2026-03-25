import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamImg from "../assets/team.jpg";

export default function Team() {
  return (
    <div className="bg-pink-50 min-h-screen fade-in">

      <Navbar />

      <div className="max-w-5xl mx-auto mt-16 px-6">

        {/* JUDUL */}
        <h1 className="text-3xl font-bold text-pink-500 text-center">
          Our Team
        </h1>

        {/* FOTO TIM */}
        <div className="mt-8 flex justify-center">
          <img
            src={teamImg}
            className="rounded-2xl shadow-lg w-full max-w-2xl hover:scale-105 transition"
          />
        </div>

        {/* DESKRIPSI */}
        <p className="text-gray-600 mt-6 text-center leading-relaxed">
          Tim ini merupakan kelompok mahasiswa Teknologi Informasi angkatan 2025 
          Fakultas Vokasi Universitas Brawijaya yang dibentuk untuk mengerjakan 
          seluruh mata kuliah pada semester 2. Kami bekerja sama dalam mengembangkan 
          berbagai proyek berbasis teknologi, khususnya dalam bidang pemrograman 
          dan pengembangan website.
        </p>

        {/* NAMA ANGGOTA */}
        <div className="mt-8 text-center text-gray-700 space-y-1">
          <p>Syifa Ananda Sukmana</p>
          <p>Uus Uswatun</p>
          <p>Evellyn Dwi Shinta L.A</p>
        </div>

        {/* TABEL MATKUL */}
        <div className="mt-10 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold text-pink-500 mb-4 text-center">
            Mata Kuliah Semester 2
          </h2>

          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-pink-100 text-gray-700">
                <th className="p-3">No</th>
                <th className="p-3">Mata Kuliah</th>
              </tr>
            </thead>

            <tbody>

              {[
                "Algoritma Pemrograman & Struktur Data",
                "Statistika & Probabilitas",
                "Pemrograman Berorientasi Object",
                "Pemrograman Web",
                "Basis Data",
                "Interaksi Manusia dan Komputer"
              ].map((matkul, i) => (
                <tr key={i} className="border-b hover:bg-pink-50 transition">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{matkul}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      <Footer />
    </div>
  );
}