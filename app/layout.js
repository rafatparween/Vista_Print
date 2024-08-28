import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uzair graphic & design",
  description: "Uzair graphic & design 123 printer solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar/>
      <Footer/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
