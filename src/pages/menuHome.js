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
import aboutUs from "../assets/gambar/aboutus.png";

import Navbar from "../components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="h-screen">
      <div className="h-[80vh]">
        {/* Navvar */}
        <Navbar />

        {/* Section 1 */}
        <div className="h-full grid grid-cols-[1fr_1fr] bg-[#222E50]">
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="pl-12 text-[40px] font-extrabold text-slate-200">
                Buka Potensi Bahasa Inggrismu Bersama EduSpeak
              </div>
              <div className="w-[50vw] bg-[#007991] rounded-r-[45px] mt-4 text-white py-6">
                <p className="pl-12 pr-4 text-lg">
                  EduSpeak adalah partner dalam membuka kemampuan bahasa Inggris
                </p>
                <p className="pl-12 pr-4 text-lg">
                  secara online,&nbsp;Akses kelas kapan saja dan dimana saja.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center pr-[11rem]">
            <div className="-mt-16 w-[26rem] h-[26rem] absolute rounded-full bg-gradient-to-r from-[#e9d985] to-[#f9e5b5] blur-[10px]"></div>
            <img className="h-[22rem] w-[27rem] z-10 -mt-12" src={modelUtama} alt="Model Utama" />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-[20vh] bg-[#EEF4FA] shadow-lg">
        <div className="grid grid-cols-2 h-full">
          <div className="w-full h-full grid grid-cols-3">
            <div className="place-self-center ">
              <div className="flex flex-row">
                <div className="pr-4">
                  <img className="h-auto w-10" src={iconPendaftar} alt="Icon Pendaftar" />
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
              <div className="flex flex-row">
                <div className="pr-4">
                  <img className="h-auto w-10" src={iconInstructor} alt="Icon Instuktur" />
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
              <div className="flex flex-row">
                <div className="pr-4">
                  <img className="h-auto w-10" src={iconMateri} alt="Icon Materi" />
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
          <div className="bg-[#E9D985] rounded-bl-[1.5rem] w-full h-full grid grid-cols-1 gap-4 content-center">
            <div className="flex flex-col px-10 pb-5">
              <div className="font-bold mt-5 mb-4">Partnership</div>
              <div className="grid grid-cols-2 ">
                <div className="flex items-center h-full ">
                  <div>
                    <img className="h-auto w-16" src={IconNurulFikri} alt="Icon Materi" />
                  </div>
                  <div className="text-gray-600">
                    <p>SEKOLAH TINGGI TEKNOLOGI</p>
                    <p>TERPADU NURUL FIKRI</p>
                  </div>
                </div>

                <div className="flex items-center h-full">
                  <div>
                    <img className="h-auto w-16" src={IconGDSC} alt="Icon Materi" />
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
      {/* Section 3 */}
      <div className="p-8">
        <div className="bg-[#007991] p-8 rounded-[1.5rem]">
          <div className="text-center text-white font-medium text-xl">
            <p>Keuntungan Bergabung Dengan</p>
            <p>E-Learning EDUSPEAK</p>
          </div>
          <div className="grid grid-row-2 gap-2">
            <div className="grid grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noSatu} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Kursus Gratis</div>
                <div>
                  Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan
                  untuk masyarakat kurang mampu
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noDua} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Akses Selamanya</div>
                <div>
                  Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu
                  lebih nyaman dan tidak terburu-buru
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noTiga} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Grup Konsultasi</div>
                <div>
                  Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan
                  dan kamu juga bisa mebuka diskusi baru
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noEmpat} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Sertifikat dan Portofolio</div>
                <div>
                  Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio
                  dari project kursus yang telah diselesaikan
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noLima} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Belajar Lebih Terarah</div>
                <div>
                  Kursus menyediakan kursus dari level dasar hingga expert sehingga semua bisa
                  belajar dengan layanan yang kami sediakan
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl flex flex-col">
                <div>
                  <img className="h-auto w-10" src={noEnam} alt="Icon Instuktur" />
                </div>
                <div className="font-semibold pt-4 pb-2 text-lg">Instruktur Berpengalaman</div>
                <div>
                  Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak
                  diragukan lagi pengalamannya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="h-[36vh] grid grid-cols-2 gap-2">
        <div className="bg-[#007991] flex flex-col rounded-r-[1.5rem] p-8">
          <div className="text-slate-200">Tentang Kami</div>
          <div className="text-slate-50 text-[20pt] font-bold mt-2">
            EDUSPEAK Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
          </div>
          <div className="text-slate-200 mt-6">
            Eduspeak diharapkan bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang
            pendidikan.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-auto max-w-[19rem] w-full" src={aboutUs} alt="Gambar AboutUs" />
        </div>
      </div>
      {/* Section 5 */}
      <div className="h-[32vh] bg-[#EEF4FA] grid grid-cols-[400px_1fr] my-10">
        <div className="flex flex-col p-12">
          <div className="text-2xl font-bold ">
            <p>Kata Mereka Tentang</p>
            <p>Kursus EduSpeak</p>
          </div>
          <div className="pt-2 text-gray-500">
            EduSpeak telah dipercaya lebih dari 10.000 siswa.
          </div>
        </div>
        <div className="grid grid-cols-1 bg-[#222E50] rounded-l-[1.5rem] text-white py-2 px-8">
          <Slider {...settings}>
            <div className="place-self-center py-6">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium line-clamp-2">
                  "Flowbite is just awesome. It contains tons of predesigned components and pages
                  starting from login screen to complex dashboard. Perfect choice for your next SaaS
                  application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                {/* <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                /> */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium">Micheal Gough</cite>
                  <cite className="pl-3 text-sm">CEO at Google</cite>
                </div>
              </figcaption>
            </div>
            <div className="place-self-center py-6">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium line-clamp-2">
                  "Flowbite is just awesome. It contains tons of predesigned components and pages
                  starting from login screen to complex dashboard. Perfect choice for your next SaaS
                  application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                {/* <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                /> */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium">Micheal Gough</cite>
                  <cite className="pl-3 text-sm">CEO at Google</cite>
                </div>
              </figcaption>
            </div>
            <div className="place-self-center py-6">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium line-clamp-2">
                  "Flowbite is just awesome. It contains tons of predesigned components and pages
                  starting from login screen to complex dashboard. Perfect choice for your next SaaS
                  application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                {/* <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                /> */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium">Micheal Gough</cite>
                  <cite className="pl-3 text-sm">CEO at Google</cite>
                </div>
              </figcaption>
            </div>
            <div className="place-self-center py-6">
              <svg
                className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p className="text-xl italic font-medium line-clamp-2">
                  "Flowbite is just awesome. It contains tons of predesigned components and pages
                  starting from login screen to complex dashboard. Perfect choice for your next SaaS
                  application."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                {/* <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                /> */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium">Micheal Gough</cite>
                  <cite className="pl-3 text-sm">CEO at Google</cite>
                </div>
              </figcaption>
            </div>
          </Slider>
        </div>
      </div>
      {/* Section 6 */}
      <div className="h-[22vh] text-white">
        <footer className="bg-[#222E50] ">
          <div className="mx-auto w-full p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="." className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">
                    EduSpeak
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Artikel</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="." className="hover:underline">
                        Terbaru
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">
                        Populer
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Follow us</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="." className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="." className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-white sm:text-center">
                © 2023{" "}
                <a href="." className="hover:underline">
                  EduSpeak™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="." className="text-white hover:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="." className="text-white hover:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="." className="text-white hover:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="." className="text-white hover:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="." className="text-white hover:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
