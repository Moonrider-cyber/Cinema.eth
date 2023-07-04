import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../utils/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import "@smastrom/react-rating/style.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Ethcinemanation",
  description: "Ethcinemanation is a decentralized movie streaming platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
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
