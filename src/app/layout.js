import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Welcome to Halal Fly",
  description: "Description of welcome to Halal Fly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased container mx-auto min-h-screen`}
      >
        {/* header  */}
        <header className="flex-1">
          <Navbar />
        </header>
        
        {/* main  */}
        <main className="flex-grow">
        {children}
        </main>

        {/* footer  */}
        <footer className="flex-1">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
