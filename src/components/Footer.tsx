import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r  from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                Alexandre Cruz
              </div>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvedor Full-Stack apaixonado por criar soluções digitais 
                inovadoras e experiências de usuário excepcionais.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#inicio" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Início
                </a>
                <a href="#sobre" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Sobre
                </a>
                <a href="#habilidades" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Habilidades
                </a>
                <a href="#projetos" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Projetos
                </a>
                <a href="#contato" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Contato
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/alexandrescruz"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandrecruz1/"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:alexandrescruzwork@gmail.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Desenvolvido com <Heart className="text-red-500 mx-1" size={16} /> por Alexandre Cruz © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;