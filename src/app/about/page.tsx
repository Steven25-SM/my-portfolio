import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo, stack } from '@/lib/data';
import TechIcon from '@/components/TechIcon';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skills = stack.flatMap((group) => group.items);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Sobre Mí</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-slate-700">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>{personalInfo.description}</p>
              <p>
                Me gusta construir proyectos completos, desde la base de datos y
                el backend hasta la interfaz que ve el usuario.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Habilidades Técnicas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 bg-slate-800/60 border border-slate-700 p-5 rounded-xl hover:border-violet-500/60 transition"
              >
                <TechIcon item={skill} size={40} />
                <p className="font-semibold text-slate-200 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}