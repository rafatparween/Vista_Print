<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
import { Inter } from "next/font/google";
import "./globals.css";
import JivoChat from "./Jivochat";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uzair graphic & design",
  description: "Uzair graphic & design 123 printer solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <JivoChat/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}





