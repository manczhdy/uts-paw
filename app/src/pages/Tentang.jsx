import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/manczhdy/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <img className='cuking-tidur' src='gambar/cat-sleeping.png' alt='cuking-tidur' align="right"/>

      <h1>Tentang</h1>
      <dl>
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>

      <p>
        <strong>Kode sumber:</strong> <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}