import React, { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [bgImage, setBgImage] = useState("./bg-img.webp");

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setBgImage(window.innerWidth <= 768 ? "./mobil.webp" : "./bg-img.webp");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTelegramClick = () => {
    window.location.href = "tg://resolve?domain=Gilam_yuvish_Zilol";
    setTimeout(() => {
      window.open("https://t.me/Gilam_yuvish_Zilol", "_blank");
    }, 500);
  };

  const services = [
    {
      name: "Gilam yuvish",
      description: "Yevropa texnologiyalarida chuqur tozalash",
      image: "./gilam-logo.webp",
    },
    {
      name: "Mebel tozalash",
      description: "Divan, kreslo va stullar uchun maxsus xizmat",
      image: "./mebl.jpg",
    },
    {
      name: "Ko‘rpa va adyol",
      description: "Issiq suvli gigienik yuvish va quritish",
      image: "./ko'rpa_adyol.webp",
    },
    {
      name: "Yumshoq matolar",
      description: "Yostiq, parda va plitkalar uchun yumshoq tozalash",
      image: "./yumshoq.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-yellow-100 via-white to-sky-100 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fon effektlar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FFD54F33,_transparent_60%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#4FC3F733,_transparent_60%)] blur-3xl"></div>

      {/* Asosiy o‘rama */}
      <div
        className={`relative backdrop-blur-1xl border border-white/30 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-14 text-center max-w-5xl w-full transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{
          backgroundImage: "url('/bg-gilam1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8 pt-6">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-all -z-10"></div>
            <img
              src="./logo.jpg"
              alt="Zilol logotipi"
              loading="lazy"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white shadow-xl object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-500 to-yellow-500 bg-clip-text text-transparent animate-glow mb-3">
          ZILOL
        </h1>
        <p className="text-black font-semibold mb-8 text-lg">
          Gilam yuvish korxonasi
        </p>

        {/* Hizmatlar */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl border border-white/40 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-white to-yellow-50"
            >
              <img
                src={service.image}
                loading="lazy"
                alt={service.name}
                className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-100 drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tugmalar */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <button
            onClick={handleTelegramClick}
            aria-label="Telegram orqali bog‘lanish"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-3">
              <img
                src="./telegram_logo.svg.png"
                alt="Telegram logotipi"
                loading="lazy"
                className="w-7 h-7"
              />
              <span>Telegram orqali bog‘lanish</span>
            </div>
          </button>

          <a
            href="#"
            aria-label="Websaytga o‘tish"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-4">
              <img
                src="./www3.svg"
                alt="Web icon"
                loading="lazy"
                className="w-7 h-7"
              />
              <span>Websaytga o‘tish</span>
            </div>
          </a>

          <a
            href="tel:+998732001313"
            aria-label="Operator bilan bog‘lanish"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-800 to-blue-900 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center gap-4">
              <img
                src="./col.png"
                alt="Telefon belgisi"
                loading="lazy"
                className="w-8 h-8"
              />
              <div className="flex flex-col text-left">
                <p>Operator bilan bog‘laning</p>
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-black text-sm border-t border-gray-300/40 pt-4 pb-8">
          <p className="text-xl font-semibold">
            📍 Farg‘ona SHahar — ZILOL gilam yuvish korxonasi
          </p>
          <p className="text-xs mt-1">
            © 2025 ZILOL Clean Service. Barcha huquqlar himoyalangan.
          </p>
        </footer>
      </div>

      {/* Glow effekt */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px #ffd54f88, 0 0 30px #4fc3f777;
          }
          50% {
            text-shadow: 0 0 30px #ffeb3b, 0 0 40px #03a9f4;
          }
        }
        .animate-glow {
          animation: glow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default App;
