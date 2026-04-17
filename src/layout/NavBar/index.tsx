import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NavBar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: string[] = ['Home', 'Features', 'Community', 'Blog', 'Pricing'];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50" role="banner">
      <nav
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <a href="/" aria-label="Ir para o início">
          <img src={Logo} alt="Logo da empresa" className="w-36 h-auto" />
        </a>

       
        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="text-[#4D4D4D] font-medium hover:text-[#4CAF4F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] rounded"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="flex items-center gap-2 bg-[#28CB8B] text-white px-5 py-2.5 rounded font-medium hover:bg-[#388E3B] transition-all focus:outline-none focus:ring-2 focus:ring-[#28CB8B]"
            >
              Register Now <HiOutlineArrowNarrowRight aria-hidden="true" />
            </a>
          </li>
        </ul>

      
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

     
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 list-none" role="list">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="block text-[#4D4D4D] font-medium hover:text-[#4CAF4F]"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-[#28CB8B] text-white px-5 py-2.5 rounded font-medium hover:bg-[#388E3B]"
              onClick={() => setMenuOpen(false)}
            >
              Register Now <HiOutlineArrowNarrowRight aria-hidden="true" />
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default NavBar;