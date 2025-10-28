export default function HttpPage() {
  const methods = [
    { color: "blue", name: "GET", desc: "Meminta data dari server" },
    { color: "green", name: "POST", desc: "Mengirim data ke server" },
    { color: "yellow", name: "PUT", desc: "Memperbarui data di server" },
    { color: "red", name: "DELETE", desc: "Menghapus data dari server" },
  ];

  const compare = [
    ["Keamanan", "Tidak aman", "Aman (terenkripsi)"],
    ["Port Default", "80", "443"],
    ["Sertifikat SSL", "Tidak diperlukan", "Diperlukan"],
    ["SEO Ranking", "Lebih rendah", "Lebih tinggi"],
    ["URL", "http://example.com", "https://example.com"],
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50 py-12 px-4">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mr-4">
            🔒
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">HTTP & HTTPS</h1>
            <p className="text-gray-600">Protokol Komunikasi Web</p>
          </div>
        </header>

        <section className="space-y-8">
          {/* HTTP */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" />
              Apa itu HTTP?
            </h2>
            <p className="text-gray-700 mb-4">
              <strong className="text-blue-600">
                HTTP (HyperText Transfer Protocol)
              </strong>{" "}
              adalah protokol komunikasi antara browser dan server web.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Cara Kerja HTTP:
              </h3>
              {[
                "Client Request",
                "Server Processing",
                "Server Response",
                "Rendering",
              ].map((step, i) => (
                <p key={i} className="flex items-start text-gray-700">
                  <span className="text-blue-600 font-bold mr-3">{i + 1}.</span>
                  {step}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              {methods.map((m, i) => (
                <div
                  key={i}
                  className={`border-l-4 border-${m.color}-500 pl-4 py-2 bg-gray-50 rounded`}
                >
                  <h4 className="font-semibold text-gray-800">{m.name}</h4>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HTTPS */}
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-green-500 rounded-full mr-3" />
              Apa itu HTTPS?
            </h2>
            <p className="text-gray-700 mb-4">
              <strong className="text-green-600">HTTPS (HTTP Secure)</strong>{" "}
              adalah versi aman HTTP dengan enkripsi SSL/TLS untuk melindungi
              data.
            </p>

            <div className="bg-green-50 rounded-xl p-6 my-6 grid md:grid-cols-3 gap-4 text-center">
              {[
                [
                  "🔐",
                  "Enkripsi",
                  "Data dienkripsi sehingga tidak bisa dibaca pihak lain",
                ],
                [
                  "✅",
                  "Integritas Data",
                  "Data tidak dapat diubah saat transit",
                ],
                ["🎯", "Autentikasi", "Memastikan website adalah yang asli"],
              ].map(([icon, title, desc], i) => (
                <div key={i}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 flex items-start">
              <span className="text-2xl mr-3">⚠️</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Perhatian</h4>
                <p className="text-sm text-gray-700">
                  Website tanpa HTTPS rentan terhadap serangan
                  man-in-the-middle. Situs aman ditandai dengan ikon gembok 🔒
                  di browser.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Perbandingan HTTP vs HTTPS
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {["Aspek", "HTTP", "HTTPS"].map((t, i) => (
                    <th
                      key={i}
                      className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800"
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map(([a, h, s], i) => (
                  <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
                    {[a, h, s].map((v, j) => (
                      <td
                        key={j}
                        className="border border-gray-300 px-4 py-3 text-gray-700"
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* References */}
        <section className="pt-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">📚</span>Referensi
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              {
                title: "MDN Web Docs - HTTP Overview",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
                desc: "Penjelasan lengkap tentang protokol HTTP",
              },
              {
                title: "Cloudflare - What is HTTPS?",
                url: "https://www.cloudflare.com/learning/ssl/what-is-https/",
                desc: "Pembahasan HTTPS dan SSL/TLS secara ringkas",
              },
              {
                title: "MDN Web Docs - HTTP Methods",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
                desc: "Daftar metode HTTP dan penggunaannya",
              },
            ].map(({ title, url, desc }, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {title}
                  </a>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
