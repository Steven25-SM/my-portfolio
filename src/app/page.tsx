import Image from "next/image";
import Link from "next/link";
import { projects, personalInfo, stack } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import TechIcon from "@/components/TechIcon";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero */}
      <section
        id="inicio"
        className="grid md:grid-cols-2 gap-12 items-center py-20"
      >
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl p-2 bg-violet-950/40 ring-1 ring-violet-500/30 shadow-[0_0_60px_rgba(139,92,246,0.3)]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm tracking-widest text-violet-400 mb-2">
            HOLA, SOY
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-3">
            {personalInfo.name}
          </h1>
          <p className="text-3xl font-semibold text-violet-400 mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-slate-400 max-w-xl mb-8">
            {personalInfo.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="bg-violet-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-600 transition"
            >
              Contáctame
            </Link>
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
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="scroll-mt-24 py-16">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="scroll-mt-24 py-16">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Tecnologías que utilizo
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {stack.map((group) => (
            <div
              key={group.category}
              className="w-full md:w-[calc(50%-12px)] bg-slate-800/60 border border-slate-700 rounded-2xl p-6"
            >
              <h3
                className={`text-2xl font-bold text-center mb-6 ${group.color}`}
              >
                {group.category}
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <TechIcon item={item} />
                    <span className="text-sm text-slate-400 text-center">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-24 py-16">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Contáctame
        </h2>
        <p className="text-slate-400 text-center mb-10">
          ¿Tienes una idea o una oportunidad? Escríbeme.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={`https://wa.me/${personalInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center hover:border-violet-500/60 transition"
          >
            <p className="text-violet-400 font-semibold mb-1">
              WhatsApp / Celular
            </p>
            <p className="text-white text-lg">{personalInfo.phone}</p>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 text-center hover:border-violet-500/60 transition"
          >
            <p className="text-violet-400 font-semibold mb-1">Correo</p>
            <p className="text-white text-lg break-all">{personalInfo.email}</p>
          </a>
        </div>
      </section>
    </div>
  );
}
