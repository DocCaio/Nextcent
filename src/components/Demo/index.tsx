import { FaArrowRight } from "react-icons/fa"; 

const Demo = () => {
  return (
    <section className="bg-[#F5F7FA] py-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#263238] mb-10 leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h2>
       
        <a
          href="#demo"
          className="inline-flex items-center gap-2 bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388E3C] transition-all focus:outline-none focus:ring-2 focus:ring-[#43A046] focus:ring-offset-2"
        >
          Get a Demo <FaArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Demo;