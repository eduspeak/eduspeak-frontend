import Navbar from "../components/Navbar";

const Detail = () => { 
    return (
        <div>
            <Navbar/>
            <div className="mx-auto max-w p-6 mt-16">
                <div className="flex items-center space-x-7">
                    <div className="flex items-center justify-center w-20 h-12">
                        <span className="text-white text-xl bg-yellow-400">★★★★★ 5.00</span>
                    </div>
                    <span className="text-gray-600">(1 Rating)</span>
                </div>
                <h1 className="text-2xl font-bold mt-4">Learning The Alphabet and Pronounciation</h1>
                <h2 className="text-lg text-gray-600">Categories: Beginner</h2>
                <div className="flex mt-6">
                    <div className="w-2/3 mr-4">
                        <img src="gambar.jpg" alt="Gambar Artikel" className="w-770 h-572 object-cover"/>
                        <h3 className="text-xl font-bold mt-4">About Course</h3>
                        <p className="text-gray-600 mt-2">Deskripsi course...</p>
                        <h4 className="text-xl font-bold mt-6">Course Content</h4>
                        <div className="rounded-lg overflow-hidden border border-gray-300 mt-2">
                            <table className="w-full">
                                <tr className="border-b border-gray-300">
                                    <td className="py-2 px-4">Data 1</td>
                                    <td className="py-2 px-4">Data 2</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="rounded-lg overflow-hidden border border-gray-300 h-460">
                            <table className="w-full h-full">
                                <tr className="border-b border-gray-300"
                                    style={
                                        {height: '298px'}
                                }>
                                    <td className="py-2 px-4">Kolom Atas 1</td>
                                </tr>
                                <tr className="border-b border-gray-300"
                                    style={
                                        {height: '162px'}
                                }>
                                    <td className="py-2 px-4">Kolom Bawah 1</td>
                                </tr>
                            </table>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-gray-300 mt-4 h-420">
                            <table className="w-full h-full">
                                <tr className="border-b border-gray-300"
                                    style={
                                        {height: '180px'}
                                }>
                                    <td className="py-2 px-4">Kolom Atas 2</td>
                                </tr>
                                <tr className="border-b border-gray-300"
                                    style={
                                        {height: '180px'}
                                }>
                                    <td className="py-2 px-4">Kolom Bawah 2</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Detail;
