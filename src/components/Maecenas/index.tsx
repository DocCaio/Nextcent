
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'; // Exemplo de ícone
import tesla from "../../assets/Maecenas/tesla.png";
import Logo from "../../assets/Maecenas/Logo.png";
import Logo2 from "../../assets/Maecenas/Logo2.png";
import Logo3 from "../../assets/Maecenas/Logo3.png";
import Logo4 from "../../assets/Maecenas/Logo4.png";
import Logo5 from "../../assets/Maecenas/Logo5.png";
import Logo6 from "../../assets/Maecenas/Logo6.png";

const Maecenas = () => {
  const logos = [Logo, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
      
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src={tesla} 
            alt="Tesla" 
            className="w-full max-w-[300px] md:max-w-none shadow-lg rounded-lg object-cover"
          />
        </div>

       
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
            "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel 
            rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, 
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi 
            laoreet elit at ligula molestie, nec molestie mi blandit."
          </p>

          <div className="mt-6">
            <h4 className="text-[#237D31] font-bold text-lg">Tim Smith</h4>
            <p className="text-gray-400 text-sm">British Dragon Boat Racing Association</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {logos.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-6 md:h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer" 
                />
              ))}
            </div>
            
            <a 
              href="#" 
              className="flex items-center gap-2 text-[#237D31] font-semibold hover:text-green-700 transition-colors"
            >
              Meet all customers
              <HiOutlineArrowNarrowRight size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Maecenas;