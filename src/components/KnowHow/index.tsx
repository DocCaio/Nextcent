import code from '../../assets/KnowHow/code.png';

const KnowHow = () => {
  return (
    <section className="bg-slate-50 py-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        <div className="w-full md:w-1/2 flex justify-center" aria-hidden="true">
          <img 
            src={code} 
            alt="Ilustração de código" 
            className="w-full max-w-md h-auto object-contain" 
          />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
          </p>
          
          <a
            href="#"
            className="inline-block bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388E3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#43A046] focus:ring-offset-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default KnowHow;