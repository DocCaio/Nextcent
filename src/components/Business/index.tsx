import icon from "../../assets/Business/icon.png";
import icon2 from "../../assets/Business/icon2.png";
import icon3 from "../../assets/Business/icon3.png";
import icon4 from "../../assets/Business/icon4.png";

const Business = () => {

  const stats = [
    { id: 1, label: "Members", value: "2,245,341", img: icon },
    { id: 2, label: "Clubs", value: "46,328", img: icon3 },
    { id: 3, label: "Event Bookings", value: "828,867", img: icon2 },
    { id: 4, label: "Payments", value: "1,926,436", img: icon4 },
  ];

  return (
    <section className="bg-[#F5F7FA] py-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight">
          Helping a local <br />
          <span className="text-[#4CAF50]">business reinvent itself</span>
        </h3>
        <p className="text-[#18191F] mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-auto">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-4">
            <img src={stat.img} alt={stat.label} className="w-12 h-12" />
            <div>
              <h4 className="text-2xl font-bold text-[#4D4D4D] leading-none">
                {stat.value}
              </h4>
              <p className="text-[#717171]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Business;