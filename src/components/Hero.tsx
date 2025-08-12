import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-6 rounded-full ">
              <img src="/perfil.png" className="rounded-full flex justify-center" alt=""  />
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Olá, eu sou</span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Alexandre Dos Santos Cruz
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full-Stack apaixonado por criar soluções digitais inovadoras 
            e experiências de usuário excepcionais
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projetos')}
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Ver Projetos
            </button>
            <a href="/curriculo.pdf" download >
            <button  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
             </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/alexandrescruz"
              className="w-12 h-12 bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandrecruz1/"
              className="w-12 h-12 bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alexandrescruzwork@gmail.com"
              className="w-12 h-12 bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;