import modelUtama from "../assets/gambar/model-utama.png";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-screen">
      <div className="h-[80vh]">
        {/* Navvar */}
        <Navbar />

        {/* Konten 1 */}
        <div className="h-full grid grid-cols-[1fr_1fr] bg-blue-500">
          <div className="flex items-center border border-blue-500">
            <div className="flex flex-col">
              <div className="pl-12 text-[40px] font-extrabold text-slate-200">
                Buka Potensi Bahasa Inggrismu Bersama EduSpeak
              </div>
              <div className="w-[45vw] bg-slate-500 rounded-r-[40px] mt-4 text-white py-6">
                <p className="pl-12 pr-4">
                  EduSpeak adalah partner dalam membuka kemampuan bahasa Inggris
                  secara online,
                </p>
                <p className="pl-12 pr-4">
                  Akses kelas kapan saja dan dimana saja.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center ">
            <img
              className="h-auto max-w-lg w-full"
              src={modelUtama}
              alt="Model Utama"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
