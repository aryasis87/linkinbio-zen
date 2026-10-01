import Link from 'next/link';
import { SITE } from '@/lib/zen';
import Kembali from '../components/Kembali';
import Napas from '../components/Napas';

export const metadata = {
  title: 'Napas Tiga Menit',
  description: 'Latihan napas terpandu dari Sena: pilih pola tenang 4–6, napas kotak, atau 4–7–8 menjelang tidur, lalu ikuti lingkaran yang mengembang dan mengempis.',
  alternates: { canonical: `${SITE}/napas` },
};

export default function NapasPage() {
  return (
    <main className="px-6 py-14">
      <div className="mx-auto max-w-xl text-center">
        <div className="text-left"><Kembali /></div>
        <h1 className="rise mt-10 font-serif text-5xl">Napas tiga menit</h1>
        <p className="rise mt-3 leading-relaxed text-sumi/75" style={{ animationDelay: '0.1s' }}>Duduk senyaman mungkin. Ikuti lingkaran: mengembang saat menarik, mengempis saat mengembuskan.</p>
        <Napas />
        <p className="mt-12 text-sm text-sumi/75">Ingin berlatih bersama? <Link href="/kelas" className="border-b border-sumi/40 font-serif text-lg italic hover:text-matcha-ink">Lihat kelas Selasa & Kamis</Link></p>
        <p className="mt-6 text-[11px] text-sumi/75">Latihan ini bukan pengganti perawatan medis. Hentikan bila pusing.</p>
      </div>
    </main>
  );
}
