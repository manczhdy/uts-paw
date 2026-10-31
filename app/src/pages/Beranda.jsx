// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  return(
    <section>
        <h1>daftar Tugas</h1>
        <p>Tema: {mahasiswa.tema}</p>
    </section>
  )
}