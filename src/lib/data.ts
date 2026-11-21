    import { Project } from '@/types';

    export const projects: Project[] = [
    {
        slug: 'pasteleria-melendez',
        title: 'Pastelería Melendez',
        description:
        'E-commerce desarrollado con React y Django, con catálogo, carrito, autenticación y pagos.',
        image: '/projects/pasteleria.png',
        technologies: ['React', 'Django', 'Django REST Framework', 'JWT', 'Stripe'],
        featured: true,
    },
    {
        slug: 'hospital-melendez',
        title: 'Hospital Melendez',
        description:
        'Sistema web desarrollado con Spring Boot para gestionar pacientes, médicos, citas, hospitalizaciones y facturación de un hospital.',
        image: '/projects/hospital.png',
        technologies: ['Java', 'SpringBoot', 'SpringSecurity', 'Thymeleaf', 'MySQL'],
        featured: true,
    },
    {
        slug: 'technova',
        title: 'TechNova',
        description:
        'E-commerce desarrollado con React y Spring Boot, con autenticación, productos, carrito, pedidos y diferentes funcionalidades para usuarios y administración.',
        image: '/projects/technova.png',
        technologies: ['React', 'Vite', 'Spring Boot', 'MySQL', 'React Router', 'JWT'],
        featured: true,
    },
    ];

    export const personalInfo = {
    name: 'Steven Saldaña Melendez',
    title: 'Software Developer',
    description:
        'Desarrollador de software enfocado en crear aplicaciones web modernas utilizando React, Java y Spring Boot.',
    email: 'steven.saldana@hotmail.com',
    phone: '+51 943897483',
    whatsapp: '51943897483',
    github: 'https://github.com/Steven25-SM',
    linkedin: 'https://www.linkedin.com/in/stevensalda%C3%B1a/',
    siteUrl: 'https://tuportafolio.com',
    avatar: '/avatar.jpg',
    };

export type StackItem = {
  name: string;
  icon?: string;
  src?: string;
};

export type StackGroup = {
  category: string;
  color: string;
  items: StackItem[];
};

export const stack: StackGroup[] = [
  {
    category: 'Frontend',
    color: 'text-cyan-400',
    items: [
      { name: 'HTML', icon: 'html5/html5-original' },
      { name: 'CSS', icon: 'css3/css3-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'React', icon: 'react/react-original' },
      { name: 'Astro', icon: 'astro/astro-original' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
    ],
  },
  {
    category: 'Backend',
    color: 'text-green-400',
    items: [
      { name: 'Java', icon: 'java/java-original' },
      { name: 'NodeJS', icon: 'nodejs/nodejs-original' },
      { name: 'Spring Boot', icon: 'spring/spring-original' },
      { name: 'MySQL', icon: 'mysql/mysql-original' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
    ],
  },
  {
    category: 'Aprendiendo',
    color: 'text-pink-400',
    items: [
      { name: 'C++', icon: 'cplusplus/cplusplus-original' },
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Swift', icon: 'swift/swift-original' },
      { name: 'AWS', src: '/icons/aws.svg' },
      { name: 'Docker', icon: 'docker/docker-original' },
    ],
  },
];