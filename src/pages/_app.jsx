import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const App = ({ Component, pageProps }) => (
  <main
    className="font-sans antialiased"
    style={{
      backgroundImage: "url('/fond.avif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}
  >
    <header className="border-b border-gray-200 bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/todos" className="flex items-center">
          <Image src="/logo.jpg" alt="logo" width={100} height={100} />
          <h1 className="text-2xl font-bold ml-2">GlobeShopConnect</h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/todos/create">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Create
                </button>
              </Link>
            </li>
            <li>
              <Link href="/todos">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  List
                </button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
);

export default App;
