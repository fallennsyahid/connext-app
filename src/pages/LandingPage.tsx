import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <header className="bg-gradient shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-opacity duration-200"
          >
            <i className="fas fa-address-book text-white text-2xl mr-3"></i>
            <div className="text-white font-bold text-xl">Connext</div>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/login"
                  className="text-gray-800 cursor-pointer px-6 py-3 text-lg bg-gray-400 hover:bg-gray-100 hover:shadow-xl hover:text-blue-600 rounded transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section Start */}
      <section>
        <div className="flex flex-col items-center justify-center text-center px-6 py-24">
          <h1 className="text-3xl font-bold text-sky-500 mb-2">Connext</h1>
          <h2 className="text-5xl font-bold text-sky-500 mb-4">
            Contact Management App
          </h2>
          <p className="text-lg max-w-2xl mb-6 text-gray-400">
            Kelola semua kontak Anda secara mudah dan efisien dalam satu
            aplikasi. Tambahkan, edit, dan hapus kontak kapan saja, di mana
            saja.
          </p>
          <div className="animate-bounce mt-2">
            <Link
              to="/dashboard"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Features Section Start */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center border-2 border-gray-500 shadow-md shadow-black p-6 rounded-lg transition duration-200 hover:-translate-y-1">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-xl text-sky-500 font-semibold mb-2">
              Desain Responsif
            </h3>
            <p className="text-gray-400">
              Akses aplikasi dari perangkat apapun, baik mobile maupun desktop.
            </p>
          </div>
          <div className="text-center border-2 border-gray-500 shadow-md shadow-black p-6 rounded-lg transition duration-200 hover:-translate-y-1">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl text-sky-500 font-semibold mb-2">
              Data Aman
            </h3>
            <p className="text-gray-400">
              Kontak Anda disimpan dengan aman dan hanya dapat diakses oleh
              Anda.
            </p>
          </div>
          <div className="text-center border-2 border-gray-500 shadow-md shadow-black p-6 rounded-lg transition duration-200 hover:-translate-y-1">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl text-sky-500 font-semibold mb-2">
              Cepat & Mudah
            </h3>
            <p className="text-gray-400">
              Pengelolaan kontak yang intuitif dan efisien hanya dalam beberapa
              klik.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section End */}

      {/* CTA Section Start */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-sky-700 mb-4">
          Kelola Kontak Tanpa Ribet
        </h2>
        <p className="text-gray-400 mb-6">
          Gunakan aplikasi kami dan mulai atur daftar kontak Anda sekarang juga!
        </p>
        <Link
          to="/dashboard"
          className="bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg font-medium"
        >
          Coba Sekarang
        </Link>
      </section>
      {/* CTA Section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default LandingPage;
