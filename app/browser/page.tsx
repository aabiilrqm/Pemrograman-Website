export default function BrowserPage() {
  const references = [
    {
      title: "MDN Web Docs – What is a Web Browser?",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_browser",
    },
    {
      title: "Google – How Browsers Work",
      url: "https://developer.chrome.com/docs/multidevice/webview/gettingstarted",
    },
    {
      title: "Cloudflare – How Does a Browser Work?",
      url: "https://www.cloudflare.com/learning/bots/what-is-a-web-browser/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center text-4xl mr-4">
            🧭
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Web Browser</h1>
            <p className="text-gray-600 text-lg">
              Aplikasi untuk Menjelajahi dan Menampilkan Halaman Web
            </p>
          </div>
        </header>

        {/* Pengertian */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-blue-600">Web browser</strong> adalah
            perangkat lunak yang digunakan untuk mengakses, mengambil, dan
            menampilkan halaman web di internet. Contoh browser populer antara
            lain Google Chrome, Mozilla Firefox, Microsoft Edge, dan Safari.
          </p>
          <p>
            Browser bekerja dengan mengirim permintaan{" "}
            <strong>HTTP/HTTPS</strong> ke server, menerima respons berupa HTML,
            CSS, dan JavaScript, lalu menampilkan hasilnya dalam bentuk halaman
            web yang interaktif.
          </p>
        </section>

        {/* Cara Kerja */}
        <section className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" />
            Cara Kerja Browser
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Pengguna memasukkan URL atau kata kunci di kolom pencarian.</li>
            <li>Browser menghubungi DNS untuk menemukan alamat IP situs.</li>
            <li>Browser mengirim permintaan HTTP/HTTPS ke server tujuan.</li>
            <li>
              Server mengirimkan data halaman web (HTML, CSS, JS, gambar).
            </li>
            <li>Browser merender halaman dan menampilkannya ke layar.</li>
          </ol>
        </section>

        {/* Komponen Utama */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-indigo-500 rounded-full mr-3" />
            Komponen Utama Browser
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "User Interface",
                desc: "Bagian antarmuka seperti tab, menu, dan kolom alamat.",
              },
              {
                title: "Rendering Engine",
                desc: "Mengubah HTML, CSS, dan JS menjadi tampilan visual.",
              },
              {
                title: "JavaScript Engine",
                desc: "Menjalankan kode JavaScript di dalam halaman web.",
              },
              {
                title: "Networking",
                desc: "Mengelola permintaan HTTP, caching, dan koneksi internet.",
              },
              {
                title: "Storage",
                desc: "Menyimpan cache, cookies, dan data lokal pengguna.",
              },
              {
                title: "Security Layer",
                desc: "Melindungi pengguna dari situs berbahaya dan menjaga koneksi HTTPS.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-indigo-400 p-4 rounded"
              >
                <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catatan */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            💡 Gunakan browser versi terbaru agar keamanan, kecepatan, dan
            kompatibilitas web tetap optimal.
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
