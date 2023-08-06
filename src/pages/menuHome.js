// asset gambar
import modelUtama from "../assets/gambar/model-utama.png";

// Asset Icon
import iconPendaftar from "../assets/gambar/pendaftar.png";
import iconInstructor from "../assets/gambar/instructor.png";
import iconMateri from "../assets/gambar/materi.png";
import IconGDSC from "../assets/gambar/partners-gdsc.png";
import IconNurulFikri from "../assets/gambar/partners-sttnf.png";
import noSatu from "../assets/gambar/1.png";
import noDua from "../assets/gambar/2.png";
import noTiga from "../assets/gambar/3.png";
import noEmpat from "../assets/gambar/4.png";
import noLima from "../assets/gambar/5.png";
import noEnam from "../assets/gambar/6.png";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-screen">
      <div className="h-[80vh]">
        {/* Navvar */}
        <Navbar />

        {/* Konten 1 */}
        <div className="h-full grid grid-cols-[1fr_1fr] bg-blue-500">
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="pl-12 text-[40px] font-extrabold text-slate-200">
                Buka Potensi Bahasa Inggrismu Bersama EduSpeak
              </div>
              <div className="w-[45vw] bg-slate-500 rounded-r-[40px] mt-4 text-white py-6">
                <p className="pl-12 pr-4">
                  EduSpeak adalah partner dalam membuka kemampuan bahasa Inggris
                </p>
                <p className="pl-12 pr-4">
                  secara online,&nbsp;Akses kelas kapan saja dan dimana saja.
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
      {/* Konten 2 */}
      <div className="h-[20vh] bg-gray-300">
        <div className="grid grid-cols-2 h-full">
          <div className="w-full h-full grid grid-cols-3">
            <div className="place-self-center ">
              <div class="flex flex-row">
                <div className="pr-4">
                  <img
                    className="h-auto w-10"
                    src={iconPendaftar}
                    alt="Icon Pendaftar"
                  />
                </div>
                <div className="grid grid-rows-2">
                  <div className="font-bold text-2xl">5000+</div>
                  <div className="-mt-1.5">
                    <p className="text-gray-600 text-[15px]"> Pendaftar Baru</p>
                    <p className="text-gray-600 text-[15px]">Setiap Bulan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="place-self-center ">
              <div class="flex flex-row">
                <div className="pr-4">
                  <img
                    className="h-auto w-10"
                    src={iconInstructor}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="grid grid-rows-2">
                  <div className="font-bold text-2xl">100+</div>
                  <div className="-mt-1.5">
                    <p className="text-gray-600 text-[15px]"> Instuktur Ahli</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="place-self-center ">
              <div class="flex flex-row">
                <div className="pr-4">
                  <img
                    className="h-auto w-10"
                    src={iconMateri}
                    alt="Icon Materi"
                  />
                </div>
                <div className="grid grid-rows-2">
                  <div className="font-bold text-2xl">150+</div>
                  <div className="-mt-1.5">
                    <p className="text-gray-600 text-[15px]"> Materi Belajar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 rounded-bl-[30px] w-full h-full grid grid-cols-1 gap-4 content-center">
            <div className="flex flex-col px-10 pb-5">
              <div className="font-bold mt-5 mb-4">Partnership</div>
              <div className="grid grid-cols-2 ">
                <div className="flex items-center h-full ">
                  <div>
                    <img
                      className="h-auto w-16"
                      src={IconNurulFikri}
                      alt="Icon Materi"
                    />
                  </div>
                  <div className="text-gray-600">
                    <p>SEKOLAH TINGGI TEKNOLOGI</p>
                    <p>TERPADU NURUL FIKRI</p>
                  </div>
                </div>

                <div className="flex items-center h-full">
                  <div>
                    <img
                      className="h-auto w-16"
                      src={IconGDSC}
                      alt="Icon Materi"
                    />
                  </div>
                  <div className="text-gray-600 ml-4">
                    <p>GDSC STT TERPADU NF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="bg-blue-600 p-8 rounded-[15px]">
          <div className="text-center text-white font-medium text-xl">
            <p>Keuntungan Bergabung Dengan</p>
            <p>E-Learning EDUSPEAK</p>
          </div>
          <div className="grid grid-row-2 gap-2">
            <div className="grid grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noSatu}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Kursus Gratis
                </div>
                <div>
                  Kami menyediakan beberapa kursus gratis untuk menunjang
                  ketersediaan pendidikan untuk masyarakat kurang mampu
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noDua}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Akses Selamanya
                </div>
                <div>
                  Semua kursus yang telah kamu daftar bisa diakses selamanya
                  sehingga belajar kamu lebih nyaman dan tidak terburu-buru
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noTiga}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Grup Konsultasi
                </div>
                <div>
                  Terdapat grup konsultasi yang berguna jika kamu ingin
                  menanyakan suatu pertanyaan dan kamu juga bisa mebuka diskusi
                  baru
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noEmpat}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Sertifikat dan Portofolio
                </div>
                <div>
                  Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat
                  serta portofolio dari project kursus yang telah diselesaikan
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noLima}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Belajar Lebih Terarah
                </div>
                <div>
                  Kursus menyediakan kursus dari level dasar hingga expert
                  sehingga semua bisa belajar dengan layanan yang kami sediakan
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img
                    className="h-auto w-10"
                    src={noEnam}
                    alt="Icon Instuktur"
                  />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">
                  Instruktur Berpengalaman
                </div>
                <div>
                  Kami mempunyai instruktur berpengalaman yang diambil dari
                  dunia industri yang tak diragukan lagi pengalamannya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
