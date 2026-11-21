import Link from 'next/link';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#stack', label: 'Stack' },
  { href: '/contact', label: 'Contáctame' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center gap-8 font-mono text-sm font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-200 hover:text-violet-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}