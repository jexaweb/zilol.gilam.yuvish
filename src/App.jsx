import React, { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Telegram tugmasi — ilova ochish + fallback
  const handleTelegramClick = () => {
    window.location.href = "tg://resolve?domain=Gilam_yuvish_Zilol";
    setTimeout(() => {
      window.open("https://t.me/Gilam_yuvish_Zilol", "_blank");
    }, 500);
  };

  const services = [
    { icon: "🧹", name: "Gilam yuvish", description: "Professional usullarda" },
    { icon: "💨", name: "Quritish", description: "Tez va sifatli" },
    { icon: "🧼", name: "Ximchistka", description: "Zamonaviy uskunalar" },
    { icon: "🚚", name: "Yetkazib berish", description: "Bepul xizmat" },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center  from-sky-100 via-white to-blue-100 p-4"
      style={{
        backgroundImage: "url('./bg-img1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 text-center border border-white/10 max-w-md w-full transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-3xl opacity-70 blur-xl group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            <img
              src="./logo.jpg"
              alt="Zilol gilam yuvish logotipi"
              className="w-40 h-40 rounded-3xl shadow-2xl object-cover border-4 border-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-10 space-y-4">
          <h1 className="text-5xl font-black text-gray-800 tracking-tight bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent animate-pulse-slow">
            ZILOL
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-700 font-semibold">
            Gilam yuvish xizmati
          </p>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
            Sifatli, tez va ishonchli gilam tozalash xizmati
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {service.name}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col space-y-4 mb-8">
          {/* Telegram Button */}
          <button
            onClick={handleTelegramClick}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <i className="fab fa-telegram-plane text-lg"></i>
              <span>Telegram</span>
              <i className="fas fa-external-link-alt text-xs opacity-70"></i>
            </div>
          </button>

          {/* Websayt */}
          <a
            href="#"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <i className="fas fa-desktop text-lg"></i>
              <span>Websayt</span>
            </div>
          </a>

          {/* Telefon */}
          <a
            href="tel:+998732001313"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <i className="fas fa-phone-alt text-lg"></i>
              <span>+998 73 200-13-13</span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              <span>Fergana</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 pt-2 border-t border-gray-200/50">
            © 2025 ZILOL Gilam Yuvish. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
