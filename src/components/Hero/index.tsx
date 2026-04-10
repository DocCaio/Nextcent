import Illustration from "/Hero/Illustration.png";

const Hero = () => {
  return (
    
    <section className="w-full bg-gray-50 flex justify-center"> 
      
    
      <div className="w-full max-w-[1750px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 min-h-[500px]">
        
    
        <div className="flex flex-col items-start gap-6 md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Lessons and insights 
            <span className="block text-[#43A046]">from 8 years</span>
          </h1>
          
          <p className="text-gray-600 text-lg">
            Where to grow your business as a photographer: site or social media?
          </p>

          <a 
            href="#" 
            className="bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388e3c] transition-all"
          >
            Register
          </a>
        </div>

      
        <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
          <img 
            src={Illustration} 
            alt="Illustration" 
            className="w-full max-w-sm md:max-w-md h-auto" 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;