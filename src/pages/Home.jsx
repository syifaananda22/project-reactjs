import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const fullText = "WELCOME TO OUR WEBSITE";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && index <= fullText.length) {
      // mengetik
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index + 1);
      }, 150);
    } else if (deleting && index >= 0) {
      // menghapus
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index - 1);
      }, 100);
    }

    // Jika selesai mengetik, tunggu sebentar lalu hapus
    if (!deleting && index > fullText.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    }

    // Jika selesai menghapus, mulai mengetik lagi
    if (deleting && index < 0) {
      setDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      {/* HERO */}
      <div className="h-[80vh] flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-pink-400 to-purple-300">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-4 max-w-xl">
          We are dedicated to creating innovative web solutions and digital experiences. Our goal is to design, develop, and deliver impactful technologies that help shape a smarter and more connected future.
        </p>
      </div>

      <Footer />
    </div>
  );
}