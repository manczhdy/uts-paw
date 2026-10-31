import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, kabupaten, hargaTiket, jamBuka } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        Kategori: {kategori}
      </p>
      <p>
        Lokasi: {kabupaten} 
      </p>
      <p>
        Tiket Masuk: Rp{hargaTiket}
      </p>
      <p>
        Jam Operasional: {jamBuka}
      </p>
    </article>
  )
}