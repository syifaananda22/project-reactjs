import Navbar from "../components/Navbar";
import wawaImg from "../assets/wawa.png";

export default function Wawa() {
  return (
    <div className="bg-pink-50 min-h-screen fade-in">

      <Navbar />

      {/* COVER */}
      <div className="h-60 bg-gradient-to-r from-pink-300 to-purple-200"></div>

      {/* PROFILE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white -mt-24 p-8 rounded-2xl shadow-lg">

          <div className="flex flex-col md:flex-row gap-6 items-center">

            <img
              src={wawaImg}
              className="w-40 h-40 rounded-full shadow-md border-4 border-white hover:scale-105 transition"
            />

            <div>
              <h1 className="text-3xl font-bold text-pink-500">
                Uus Uswatun
              </h1>

              <p className="text-gray-600">Mahasiswa Teknologi Informasi</p>
              <p className="text-gray-500 text-sm">Lampung, Indonesia</p>

              {/* BUTTON */}
              <div className="flex gap-3 mt-4">

                <a 
                  href="www.linkedin.com/in/wawauswa676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full text-white 
                  bg-gradient-to-r from-pink-400 to-purple-300 
                  hover:scale-105 transition shadow-md"
                >
                  LinkedIn
                </a>

                <a 
                  href="https://github.com/Wawaaaa0101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full text-white 
                  bg-gray-800 
                  hover:scale-105 transition shadow-md"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto mt-6 grid md:grid-cols-3 gap-6 px-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="font-bold text-pink-500 mb-2">About</h2>
            <p className="text-gray-600 text-justify">
              Saya merupakan mahasiswa Teknologi Informasi yang memiliki minat dalam pengembangan website dan teknologi digital. Saya senang mempelajari hal baru, mampu bekerja dalam tim, serta terus mengembangkan kemampuan untuk mengikuti perkembangan dunia Teknologi.
            </p>
          </div>

          {/* BIODATA */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="font-bold text-pink-500 mb-4">Biodata</h2>

            <div className="grid grid-cols-2 gap-4 text-gray-600">
             <p><b>Nama:</b> Uus Uswatun</p>
              <p><b>Kelas:</b> T2G</p>
              <p><b>Domisili:</b> Lampung</p>
              <p><b>Asal Sekolah:</b> SMAN 1 Pringsewu</p>
            </div>
          </div>

          {/* SKILLS */}
        
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h2 className="font-bold text-pink-500 mb-4">Skills</h2>

            {[
              { name: "Project Collaboration", level: "85%" }, 
              { name: "UI/UX Design", level: "75%" },
              { name: "Website Design", level: "60%" },
            ].map((skill, i) => (
              <div key={i} className="mb-3">
                <p className="text-gray-600">{skill.name}</p>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-pink-400 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* CONTACT */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-bold text-pink-500 mb-3">Contact</h2>

            {/* EMAIL */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <svg className="w-4 h-4 fill-pink-400" viewBox="0 0 24 24">
                <path d="M2 4h20v16h-20v-16zm10 7l10-7h-20l10 7zm0 2l-10-7v14h20v-14l-10 7z"/>
              </svg>
              wawauswa676@email.com
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
              <svg className="w-4 h-4 fill-pink-400" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.5 3 3.7 5.2 6.7 6.7l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.6 2.7z"/>
              </svg>
              +6287881639110
            </div>

          </div>

          {/* QUOTES */}
          <div className="bg-white p-6 rounded-2xl shadow italic text-gray-500 text-sm">
            “life is too short to live with a negative mindset. be happy, let it go, be free, be positive, change, be kind and make life worth living.”
          </div>

        </div>

      </div>

    </div>
  );
}