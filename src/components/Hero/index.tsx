import Illustration from "/Hero/Illustration.png";

const Hero = () => {
  return (
   
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50 max-w-[2000px] mx-auto">
      

      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Lessons and insights 
          <span className="block text-[#43A046]">from 8 years</span>
        </h1>
        
        <span className="text-gray-600 text-lg">
          Where to grow your business as a photographer: site or social media?
        </span>

       
        <a 
          href="#" 
          className="bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388e3c] transition-colors"
        >
          Register
        </a>
      </div>

     
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img src={Illustration} alt="Illustration" className="w-full max-w-md" />
      </div>
      
    </section>
  );
};

export default Hero;