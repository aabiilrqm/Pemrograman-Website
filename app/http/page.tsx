export default function HttpPage() {
  return (
    <article className="prose prose-sky max-w-none">
      <h1>HTTP dan HTTPS</h1>
      <p>
        <strong>HTTP (HyperText Transfer Protocol)</strong> adalah protokol
        komunikasi yang digunakan antara browser dan server untuk mentransfer
        data seperti teks, gambar, atau video. Setiap kali kamu membuka situs,
        browser mengirim permintaan (request) HTTP ke server, lalu menerima
        balasan (response).
      </p>
      <p>
        <strong>HTTPS</strong> adalah versi aman dari HTTP, di mana data
        dienkripsi menggunakan protokol SSL/TLS. Ini mencegah penyadapan dan
        manipulasi data oleh pihak ketiga.
      </p>
      <blockquote>
        Situs dengan HTTPS memiliki ikon gembok di address bar, menandakan
        koneksi aman.
      </blockquote>
      <h3>Referensi:</h3>
      <ul>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            target="_blank"
          >
            MDN Web Docs - HTTP Overview
          </a>
        </li>
        <li>
          <a
            href="https://www.cloudflare.com/learning/ssl/what-is-https/"
            target="_blank"
          >
            Cloudflare - What is HTTPS?
          </a>
        </li>
      </ul>
    </article>
  );
}
