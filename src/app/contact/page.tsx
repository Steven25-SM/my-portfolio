import { Metadata } from 'next';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Contáctame</h1>
      <p className="text-slate-400 text-center mb-10">
        ¿Tienes una idea o una oportunidad? Escríbeme.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <a
          href={`https://wa.me/${personalInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center hover:border-violet-500/60 transition"
        >
          <FaWhatsapp className="h-10 w-10 text-[#25D366]" aria-hidden="true" />
          <p className="text-violet-400 font-semibold">WhatsApp / Celular</p>
          <p className="text-white text-lg">{personalInfo.phone}</p>
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex flex-col items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center hover:border-violet-500/60 transition"
        >
          <MdEmail className="h-10 w-10 text-[#0078D4]" aria-hidden="true" />
          <p className="text-violet-400 font-semibold">Correo</p>
          <p className="text-white text-lg break-all">{personalInfo.email}</p>
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 text-white px-6 py-3 rounded-full hover:border-violet-500 transition"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 text-white px-6 py-3 rounded-full hover:border-violet-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}