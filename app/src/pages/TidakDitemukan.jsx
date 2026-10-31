import { Link } from 'react-router-dom'
import './TidakDitemukan.css'

export default function TidakDitemukan() {
  return (
    <div className="tidak-ditemukan">
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>

      <p>Halaman yang kamu cari tidak tersedia. Periksa kembali alamat URL yang kamu masukkan</p>
      <Link to="/" className="Beranda">Kembali ke beranda</Link>
    </div>
  )
}