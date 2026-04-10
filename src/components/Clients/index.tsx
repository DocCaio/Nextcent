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
    title: "Título do Benefício 1",
    description: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 2,
    icon: futureIcon2,
    title: "Título do Benefício 2",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    icon: futureIcon3,
    title: "Título do Benefício 3",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
];

const ClientsSection = () => {
 const clientIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <section className="flex flex-col items-center w-full max-w-[1600px] px-4 py-12 space-y-16 sm:space-y-20">

      <div className="w-full max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
          Our Clients
        </h2>
        <p className="text-gray-500 mb-8">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-6 gap-x-4 justify-items-center items-center">
          {clientIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Client logo ${index + 1}`}
              className="h-7 sm:h-8 md:h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

    
      <div className="text-center max-w-2xl w-full px-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Manage your entire community in a single system
        </h3>
        <p className="text-gray-500 mb-8">Who is Nextcent suitable for?</p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-8">
          {futuresData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center gap-3 w-full sm:max-w-[200px]"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              <h4 className="font-semibold text-base">{item.title}</h4>
              <span className="text-sm text-gray-500">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

 
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Illustration}
            alt="Pixelgrade Illustration"
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md"
          />
        </div>
        <div className="w-full md:w-1/2 min-w-0 space-y-5 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
          </p>
          <button className="bg-[#4CAF4F] hover:bg-[#388E3B] text-white font-medium py-3 px-8 rounded transition duration-300">
            Register
          </button>
        </div>
      </div>

    </section>
  );
};

export default ClientsSection;