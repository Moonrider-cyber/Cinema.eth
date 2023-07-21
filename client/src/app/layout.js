import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../utils/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import Head from "next/head";

import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";


export const metadata = {
  title: "Ethcinemanation",
  description: "Ethcinemanation is a decentralized movie streaming platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="MDrnSZIfnlUSB2wDuhYFwx5zS6bjf-5utJ2AqLFqtX8" />
        <meta name="keywords" content="Ethcinemanation, blockchain, movie rating, movie reviews, reviews, movie, film, cinema, decentralized, decentralized movie rating" />
        <link rel="icon" type="image/png" href="../asset/logo.png" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
