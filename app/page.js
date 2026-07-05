import { ArrowUpRight } from 'lucide-react';

const LINKS = [
  { no: 'I', label: 'Kelas Meditasi', meta: 'daring, tiap Selasa & Kamis' },
  { no: 'II', label: 'Retret Akhir Pekan', meta: 'Lembang — batch September' },
  { no: 'III', label: 'Jurnal & Tulisan', meta: 'catatan tentang pelan-pelan' },
  { no: 'IV', label: 'Rekaman Panduan', meta: 'napas 10 menit, gratis' },
  { no: 'V', label: 'Undang Sena', meta: 'sesi untuk tim & komunitas' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm text-center">
        {/* Enso */}
        <div className="rise relative mx-auto h-24 w-24">
          <span className="breathe absolute inset-0 rounded-full border border-sumi/40" aria-hidden="true" />
          <span className="absolute inset-3 grid place-items-center rounded-full bg-matcha/10 font-serif text-3xl italic text-matcha">禅</span>
        </div>

        <header className="rise mt-8" style={{ animationDelay: '0.15s' }}>
          <p className="text-[10px] uppercase tracking-[0.45em] text-sumi/45">Ruang teduh</p>
          <h1 className="mt-3 font-serif text-5xl">Sena</h1>
          <p className="mt-3 text-sm leading-relaxed text-sumi/55">
            Guru mindfulness &amp; teman minum teh.<br />Mengajak pulang ke napas sendiri.
          </p>
        </header>

        <span className="rise mx-auto mt-8 block h-10 w-px bg-sumi/20" style={{ animationDelay: '0.3s' }} aria-hidden="true" />

        {/* Daftar tenang */}
        <nav className="mt-8" aria-label="Tautan">
          {LINKS.map((l, i) => (
            <a
              key={l.no}
              href="#"
              className="rise hairline group flex items-baseline gap-4 border-b py-5 text-left transition-colors first:border-t hover:bg-white"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <span className="w-7 font-serif text-sm italic text-matcha">{l.no}</span>
              <span className="flex-1">
                <span className="block font-serif text-2xl leading-tight transition group-hover:text-matcha">{l.label}</span>
                <span className="mt-0.5 block text-xs text-sumi/45">{l.meta}</span>
              </span>
              <ArrowUpRight size={15} className="translate-y-0.5 text-sumi/25 transition group-hover:text-matcha" />
            </a>
          ))}
        </nav>

        <p className="rise mt-10 font-serif text-lg italic text-sumi/50" style={{ animationDelay: '1s' }}>
          “Pelan itu bukan lambat — pelan itu hadir.”
        </p>
        <p className="rise mt-6 text-[11px] tracking-wide text-sumi/35" style={{ animationDelay: '1.1s' }}>sena@ruangteduh.id · Bandung</p>
      </div>
    </main>
  );
}
