
import { FaArrowRight } from "react-icons/fa"; 

const Demo = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
       
        <h2 className="text-4xl md:text-6xl font-bold text-[#263238] mb-8 leading-tight">
          Pellentesque suscipit <br className="hidden md:block" /> fringilla libero eu.
        </h2>

     
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-[#43A046] text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-[#388E3C] transition-all duration-300 shadow-md"
          >
            Get a Demo <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demo;