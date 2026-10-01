import Link from 'next/link';

export default function Kembali() {
  return (
    <Link href="/" className="inline-flex items-baseline gap-2 text-sm text-sumi/75 hover:text-matcha-ink">
      <span aria-hidden="true">←</span> <span className="font-serif text-lg italic">Sena</span> · ruang teduh
    </Link>
  );
}
