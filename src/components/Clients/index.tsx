import Illustration from "/ClientsSection/Illustration.png";
import icon1 from "/ClientsSection/icon1.png";
import icon2 from "/ClientsSection/icon2.png";
import icon3 from "/ClientsSection/icon3.png";
import icon4 from "/ClientsSection/icon4.png";
import icon5 from "/ClientsSection/icon5.png";
import icon6 from "/ClientsSection/icon6.png";
import icon7 from "/ClientsSection/icon7.png";

import futureIcon from "/ClientsSection/futures/futureIcon.png";
import futureIcon2 from "/ClientsSection/futures/futureIcon2.png";
import futureIcon3 from "/ClientsSection/futures/futureIcon3.png";

const futuresData = [
  {
    id: 1,
    icon: futureIcon,
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 2,
    icon: futureIcon2,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 3,
    icon: futureIcon3,
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments.",
  },
];

const ClientsSection = () => {
  const clientIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <section
      className="w-full flex flex-col items-center px-6 sm:px-10 lg:px-16 py-16 space-y-20 max-w-7xl mx-auto"
      aria-label="Seção de clientes e benefícios"
    >
   
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] mb-2">Our Clients</h2>
        <p className="text-gray-500 mb-10">We have been working with some Fortune 500+ clients</p>
        
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-8 gap-x-6 justify-items-center items-center"
          role="list"
        >
          {clientIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Logo do cliente ${index + 1}`}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              role="listitem"
            />
          ))}
        </div>
      </div>

     
      <div className="text-center max-w-4xl w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-3 leading-tight">
          Manage your entire community <br className="hidden md:block" /> in a single system
        </h3>
        <p className="text-gray-500 mb-12">Who is Nextcent suitable for?</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 lg:gap-16">
          {futuresData.map((item) => (
            <article key={item.id} className="flex flex-col items-center text-center px-4 py-6 shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="relative mb-4">
              
                <img src={item.icon} alt="" aria-hidden="true" className="w-14 h-14 object-contain relative z-10" />
              </div>
              <h4 className="font-bold text-xl text-[#4D4D4D] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center gap-12 w-full pt-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={Illustration} 
            alt="Pessoa interagindo com painel de gerenciamento" 
            className="w-full max-w-md lg:max-w-lg" 
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-[#4D4D4D] leading-tight">
            The unseen of spending three years <br className="hidden lg:block" /> at Pixelgrade
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
            Nullam mattis tristique iaculis.
          </p>
          <button className="bg-[#4CAF4F] hover:bg-[#388E3B] text-white font-medium py-3 px-8 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:ring-offset-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;