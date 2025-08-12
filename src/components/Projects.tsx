import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Este projeto consiste na conclusão da implementação de um site de leilões online, fornecendo aos usuários uma plataforma para criar, visualizar e participar de leilões de uma ampla variedade de itens. O projeto é desenvolvido utilizando Django para o backend e HTML, CSS e JavaScript para o frontend.",
      image: "/commercecs50.png",
      technologies: ["Html", "Css", "Javascript", "Django"],
      date: "2024",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Gerenciador de Tarefas e Compromissos, um aplicativo desenvolvido em C# utilizando .NET MAUI e SQLite. Este aplicativo permite aos usuários gerenciar suas tarefas diárias e compromissos de forma eficiente e organizada.",
      image: "/gerenciador_mobile.png",
      technologies: ["Vue.js", "Firebase", "Socket.io", "PWA"],
      date: "2023",
      github: "#",
      live: "#"
    },
    {
      title: "Rede Social Interativa",
      description: "Este projeto consiste na implementação de uma rede social interativa utilizando Python, JavaScript, HTML e CSS. A plataforma permite aos usuários criar postagens, seguir outros usuários, interagir por meio de curtidas e realizar operações como editar suas próprias postagens.",
      image: "/networkcs50.png",
      technologies: ["Next.js", "TypeScript", "Chart.js", "MongoDB"],
      date: "2023",
      github: "#",
      live: "#"
    },
    {
      title: "Game Space Adventure",
      description:"O \"Space Adventure\" leva os jogadores a uma jornada emocionante por mundos exóticos e perigosos. Com uma mistura de aventura e plataforma, o jogo desafia os jogadores a enfrentar obstáculos, inimigos e perigos enquanto exploram cenários intrigantes.",
      image: "/imagem_spaceAdventure.png",
      technologies: ["Python", "TensorFlow", "React", "Docker", "AWS"],
      date: "2022",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi, mostrando diferentes tecnologias e soluções
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Ver Mais Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;