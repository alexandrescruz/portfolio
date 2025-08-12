import React from 'react';
import { Code, Coffee, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Código Limpo",
      description: "Escrevo código limpo, maintível e escalável seguindo as melhores práticas"
    },
    {
      icon: <Coffee className="text-orange-500" size={24} />,
      title: "Dedicação",
      description: "Apaixonado por tecnologia, sempre buscando aprender e evoluir"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Colaboração",
      description: "Trabalho bem em equipe e tenho facilidade para comunicar ideias"
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Inovação",
      description: "Busco sempre soluções criativas e inovadoras para problemas complexos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Entusiasta da tecnologia, atualmente buscando posição júnior para aplicar minha paixão por desenvolvimento de software.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl">
                <img src="/perfil.png" className="" alt="" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
               Possuo experiência em suporte de TI e desenvolvimento full-stack, com habilidades sólidas em Python, Django Framework, PostgreSQL, JavaScript, HTML, CSS, SQL, Git, GitHub, C# e Unity. Tenho capacidade comprovada de adaptação e aprendizado rápido, sempre em busca de aprimorar minhas habilidades técnicas. Sou motivado, apaixonado por tecnologia e estou sempre em busca de novos desafios que me permitam crescer profissionalmente.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
             
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  3+ anos experiência
                </span>
                {/* <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  20+ projetos entregues
                </span> */}
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Foco em qualidade
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;