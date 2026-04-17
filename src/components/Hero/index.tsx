import Illustration from '/Hero/Illustration.png';

const Hero = () => {
  return (
    <section className="w-full bg-gray-50" aria-label="Seção principal">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        

        <div className="flex flex-col items-start gap-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Lessons and insights
            <span className="block text-[#43A046]">from 8 years</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Where to grow your business as a photographer: site or social media?
          </p>
          

          <a
            href="#register"
            className="bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388e3c] transition-all focus:outline-none focus:ring-2 focus:ring-[#43A046] focus:ring-offset-2"
          >
            Register
          </a>
        </div>

   
        <div className="md:w-1/2 flex justify-center md:justify-end" aria-hidden="true">
          <img
            src={Illustration}
            alt="Ilustração de crescimento de negócios"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;