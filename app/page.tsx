import Link from "next/link";

export default function HomePage() {
  const topics = [
    {
      title: "HTTP & HTTPS",
      desc: "Protokol penghubung antara browser dan server.",
      href: "/http",
      icon: "🔒",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Nama Domain",
      desc: "Alamat unik untuk mengakses situs di internet.",
      href: "/domain",
      icon: "📝",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Hosting",
      desc: "Tempat penyimpanan file situs web.",
      href: "/hosting",
      icon: "💾",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "DNS",
      desc: "Sistem penerjemah nama domain menjadi IP address.",
      href: "/dns",
      icon: "🗂️",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Browser",
      desc: "Aplikasi untuk menampilkan halaman web.",
      href: "/browser",
      icon: "🌍",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-16 mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-sky-400 to-blue-600 rounded-3xl mb-6 shadow-lg">
            <span className="text-4xl">🌐</span>
          </div>

          <h1 className="text-6xl font-extrabold mb-6">Cara Kerja Internet</h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mempelajari bagaimana internet bekerja
          </p>
        </section>

        {/* Info Banner
        <div className="bg-white/60 backdrop-blur-sm border border-sky-200 rounded-2xl p-6 mb-12 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="shrink-0 text-3xl">💡</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Mengapa Penting?
              </h3>
              <p className="text-gray-600 text-sm">
                Memahami cara kerja internet membantu Anda menjadi pengguna yang
                lebih cerdas dan developer yang lebih baik. Klik kartu di bawah
                untuk mempelajari setiap komponen secara detail.
              </p>
            </div>
          </div>
        </div> */}

        {/* Cards Section */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {topics.map((topic) => (
            <Link
              href={topic.href}
              key={topic.title}
              className="group relative block bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-gray-100 hover:-translate-y-2 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative mb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${topic.color} rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-3xl">{topic.icon}</span>
                </div>
              </div>

              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-sky-700 transition-colors">
                  {topic.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {topic.desc}
                </p>

                <div className="flex items-center text-sky-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm">Pelajari lebih lanjut</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
