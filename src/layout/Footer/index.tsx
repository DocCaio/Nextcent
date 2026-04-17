
import { 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaDiscord, 
  FaPaperPlane 
} from 'react-icons/fa6'; 

import logo from "../../assets/LogoLight.png";


const Footer = () => {


  return (
    <footer className="bg-[#263238] text-white py-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
 
        <div className="flex flex-col gap-6">
          <img src={logo} alt="Logo da empresa" className="w-32" />
          <p className="text-sm text-gray-300">
            Copyright © 2026 CaioDev.<br />All rights reserved
          </p>
          <nav aria-label="Redes sociais">
            <ul className="flex gap-4 list-none" role="list">
              {[
                { Icon: FaInstagram, label: 'Instagram' },
                { Icon: FaXTwitter, label: 'X (Twitter)' },
                { Icon: FaYoutube, label: 'YouTube' },
                { Icon: FaDiscord, label: 'Discord' },
              ].map(({ Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label={label}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

     
        <nav aria-label="Company links">
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-300 list-none">
            {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Support links">
          <h3 className="text-xl font-semibold mb-6">Support</h3>
          <ul className="flex flex-col gap-3 text-gray-300 list-none">
            {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xl font-semibold mb-6">Stay up to date</h3>
          <form 
            className="relative" 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Inscrito com sucesso!');
            }}
          >
            <label htmlFor="email-newsletter" className="sr-only">Seu endereço de e-mail</label>
            <input
              id="email-newsletter"
              type="email"
              required
              placeholder="Your email address"
              className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 pr-12 outline-none focus:ring-2 focus:ring-green-500 transition-all"
              aria-label="Insira seu e-mail para receber novidades"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md transition-colors"
              aria-label="Enviar e-mail"
            >
              <FaPaperPlane size={18} aria-hidden="true" />
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;