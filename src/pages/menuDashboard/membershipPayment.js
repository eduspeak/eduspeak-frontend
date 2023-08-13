import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/popup.css";

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [courses, setCourses] = useState("");
  const [tanggalPembayaran, setTanggalPembayaran] = useState("");
  const [harga, setHarga] = useState("");
  const [fotoBukti, setFotoBukti] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNama("");
    setCourses("");
    setTanggalPembayaran("");
    setHarga("");
    setFotoBukti(null);
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Buka Form Pembayaran
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="mx-auto mt-10 px-4 py-6 bg-white shadow-md rounded-lg custom-modal-width"
        style={{ overlay: { zIndex: 101 } }}
      >
        <div className="flex">
          <div className="w-1/2 p-6">
            <form onSubmit={handleFormSubmit}>
              <h3 className="mb-4 text-center text-lg font-medium leading-none text-gray-900 dark:text-white">
                Pembayaran Membership
              </h3>
              <div className="p-2">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="courses"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Courses
                  </label>
                  <input
                    type="text"
                    name="courses"
                    id="courses"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="All courses (including premium content)"
                    required=""
                    value={courses}
                    onChange={(e) => setCourses(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tanggal Pembayaran:
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={tanggalPembayaran}
                    onChange={(e) => setTanggalPembayaran(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="harga"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Harga
                  </label>
                  <input
                    type="text"
                    name="harga"
                    id="harga"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rp. 200.000"
                    required=""
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="user_avatar"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    value={fotoBukti}
                    onChange={(e) => setFotoBukti(e.target.files[0])}
                  />
                  <div
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    Upload bukti pembayaran
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Bayar
              </button>
            </form>
          </div>
          <div className="w-1/2 p-6">
            <div className="w-full max-w-sm p-4 bg-[#222E50] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-xl font-medium text-white">
                Berikut rincian prosedur pembayaran membership
              </h5>
              <ul className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <span className="text-base font-normal leading-tight text-white">
                    • Biaya Rp200.000,- (pembayaran dilakukan di awal)
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <span className="text-base font-normal leading-tight text-white">
                    • Pembayaran dikirim ke nomor rekening berikut 1218722
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <span className="text-base font-normal leading-tight text-white">
                    • Kirim bukti pembayaran di formulir yang sudah disediakan
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <span className="text-base font-normal leading-tight text-white">
                    • Admin akan segera memverifikasi dan menguprage akun
                  </span>
                </li>
                <li className="flex space-x-3 items-center">
                  <span className="text-base font-normal leading-tight text-white">
                    • Hubungi customer care: 08218271928 jika terdapat kendala
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Payment;
