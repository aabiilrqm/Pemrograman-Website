export default function DomainPage() {
  const references = [
    {
      title: "ICANN - What is a domain name?",
      url: "https://www.icann.org/resources/pages/domain-name-2012-02-25-en",
    },
    {
      title: "Cloudflare - What is a domain name?",
      url: "https://www.cloudflare.com/learning/dns/what-is-a-domain-name/",
    },
    {
      title: "Wikipedia - Domain name",
      url: "https://en.wikipedia.org/wiki/Domain_name",
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
            <h1 className="text-4xl font-bold text-gray-800">Nama Domain</h1>
            <p className="text-gray-600 text-lg">Identitas Unik di Dunia Web</p>
          </div>
        </header>

        {/* Pengertian */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-blue-600">Nama domain</strong> adalah alamat
            yang digunakan untuk mengidentifikasi situs web di internet, seperti{" "}
            <em>example.com</em>. Domain memudahkan pengguna mengakses situs
            tanpa harus mengingat alamat IP numerik.
          </p>
          <p>
            Saat pengguna mengetik nama domain di browser, sistem{" "}
            <strong>DNS (Domain Name System)</strong> akan menerjemahkannya
            menjadi alamat IP server tujuan agar koneksi dapat dilakukan.
          </p>
        </section>

        {/* Struktur Domain */}
        <section className="mt-8 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" />
            Struktur Nama Domain
          </h2>
          <p className="text-gray-700 mb-4">
            Nama domain biasanya terdiri dari beberapa bagian yang dipisahkan
            oleh titik (<strong>.</strong>), misalnya:
          </p>
          <div className="bg-white border border-blue-200 rounded-lg p-4 mb-4">
            <code className="font-mono text-blue-700 text-lg">
              www.example.com
            </code>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              <strong>www</strong> – subdomain (opsional)
            </li>
            <li>
              <strong>example</strong> – nama domain utama (second-level domain)
            </li>
            <li>
              <strong>.com</strong> – domain tingkat atas (Top-Level Domain /
              TLD)
            </li>
          </ul>
        </section>

        {/* Jenis TLD */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-cyan-500 rounded-full mr-3" />
            Jenis Top-Level Domain (TLD)
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "🏢", name: "Generic (gTLD)", ex: ".com, .org, .net" },
              { icon: "🌏", name: "Country Code (ccTLD)", ex: ".id, .us, .jp" },
              { icon: "🏫", name: "Sponsored (sTLD)", ex: ".edu, .gov, .mil" },
            ].map(({ icon, name, ex }, i) => (
              <div
                key={i}
                className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded"
              >
                <h4 className="font-semibold text-gray-800 flex items-center mb-1">
                  <span className="text-2xl mr-2">{icon}</span>
                  {name}
                </h4>
                <p className="text-sm text-gray-600">Contoh: {ex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catatan */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            ⚠️ Pendaftaran domain dilakukan melalui <strong>registrar</strong>{" "}
            resmi, dan setiap domain bersifat unik di seluruh dunia.
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
