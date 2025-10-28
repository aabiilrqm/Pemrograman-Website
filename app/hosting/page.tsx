export default function HostingPage() {
  const references = [
    {
      title: "Hostinger - What Is Web Hosting?",
      url: "https://www.hostinger.com/tutorials/what-is-web-hosting",
    },
    {
      title: "Cloudflare - What is web hosting?",
      url: "https://www.cloudflare.com/learning/web-hosting/what-is-web-hosting/",
    },
    {
      title: "Wikipedia - Web hosting service",
      url: "https://en.wikipedia.org/wiki/Web_hosting_service",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 py-12 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center text-4xl mr-4">
            💾
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Web Hosting</h1>
            <p className="text-gray-600 text-lg">
              Tempat Website Tinggal di Internet
            </p>
          </div>
        </header>

        {/* Pengertian */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-blue-600">Web hosting</strong> adalah
            layanan yang menyediakan ruang di server agar situs web dapat
            diakses melalui internet. Semua file seperti HTML, gambar, dan video
            disimpan di server hosting.
          </p>
          <p>
            Saat pengguna mengunjungi situs, browser akan mengambil data dari
            server hosting dan menampilkannya kepada pengguna. Server bekerja 24
            jam agar website bisa diakses kapan saja.
          </p>
        </section>

        {/* Cara Kerja */}
        <section className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" />
            Cara Kerja Web Hosting
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Pemilik website mengunggah file situs ke server hosting.</li>
            <li>Server menyimpan dan menjaga agar file selalu tersedia.</li>
            <li>Pengguna mengetik domain → DNS mengarah ke server hosting.</li>
            <li>Browser menampilkan konten website dari server tersebut.</li>
          </ol>
        </section>

        {/* Jenis Hosting */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-indigo-500 rounded-full mr-3" />
            Jenis-Jenis Web Hosting
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "👥",
                name: "Shared Hosting",
                desc: "Beberapa website berbagi satu server yang sama. Cocok untuk pemula.",
              },
              {
                icon: "⚙️",
                name: "VPS Hosting",
                desc: "Server virtual pribadi dengan kontrol dan performa lebih tinggi.",
              },
              {
                icon: "💻",
                name: "Dedicated Hosting",
                desc: "Satu server fisik khusus untuk satu website.",
              },
              {
                icon: "☁️",
                name: "Cloud Hosting",
                desc: "Menggunakan jaringan server cloud untuk kecepatan dan skalabilitas.",
              },
            ].map(({ icon, name, desc }, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded"
              >
                <h4 className="font-semibold text-gray-800 flex items-center mb-1">
                  <span className="text-2xl mr-2">{icon}</span>
                  {name}
                </h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catatan */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            ⚠️ Dalam memilih hosting, pertimbangkan faktor seperti kecepatan,
            keamanan, dukungan teknis, dan kapasitas penyimpanan.
          </p>
        </div>

        {/* Referensi */}
        <section className="pt-6 border-t border-gray-200 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">📚</span>Referensi
          </h3>
          <ul className="space-y-2 text-gray-700">
            {references.map(({ title, url }, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
