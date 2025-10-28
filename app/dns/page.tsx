export default function DnsPage() {
  const references = [
    {
      title: "Cloudflare – What is DNS?",
      url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
    },
    {
      title: "Amazon Web Services – What is DNS?",
      url: "https://aws.amazon.com/route53/what-is-dns/",
    },
    {
      title: "Google Developers – Introduction to DNS",
      url: "https://developers.google.com/speed/public-dns/docs/using",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50 py-12 px-6">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <header className="flex items-center mb-8">
          <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl mr-4">
            🌐
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              DNS (Domain Name System)
            </h1>
            <p className="text-gray-600 text-lg">
              Sistem Penerjemah Nama Domain ke Alamat IP
            </p>
          </div>
        </header>

        {/* Pengertian */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-blue-600">DNS</strong> adalah sistem yang
            berfungsi untuk menerjemahkan nama domain seperti{" "}
            <em>example.com</em> menjadi alamat IP yang dapat dimengerti oleh
            komputer. Tanpa DNS, pengguna harus mengingat angka IP untuk membuka
            situs.
          </p>
          <p>
            Misalnya, ketika kamu mengetik <em>google.com</em> di browser,
            permintaan dikirim ke <strong>DNS resolver</strong> untuk mencari
            alamat IP server Google, lalu browser diarahkan ke sana.
          </p>
        </section>

        {/* Cara Kerja */}
        <section className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" />
            Cara Kerja DNS
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Pengguna mengetik nama domain di browser.</li>
            <li>Browser meminta resolver untuk mencari alamat IP.</li>
            <li>
              Resolver menghubungi server DNS (root, TLD, dan authoritative).
            </li>
            <li>Resolver mengembalikan alamat IP ke browser.</li>
            <li>Browser terhubung ke server tujuan dan menampilkan situs.</li>
          </ol>
        </section>

        {/* Jenis Record DNS */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-cyan-500 rounded-full mr-3" />
            Jenis-Jenis Record DNS
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                type: "A Record",
                desc: "Menghubungkan domain ke alamat IPv4.",
              },
              {
                type: "AAAA Record",
                desc: "Menghubungkan domain ke alamat IPv6.",
              },
              {
                type: "CNAME",
                desc: "Mengarahkan satu domain ke domain lain.",
              },
              {
                type: "MX Record",
                desc: "Menentukan server untuk layanan email.",
              },
              {
                type: "NS Record",
                desc: "Menentukan server DNS yang mengatur domain.",
              },
              {
                type: "TXT Record",
                desc: "Menyimpan data teks (misalnya verifikasi domain).",
              },
            ].map(({ type, desc }, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded"
              >
                <h4 className="font-semibold text-gray-800 mb-1">{type}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catatan */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            💡 DNS berperan penting dalam kecepatan akses website. Gunakan DNS
            publik seperti Google DNS (8.8.8.8) atau Cloudflare DNS (1.1.1.1)
            untuk performa lebih baik.
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
