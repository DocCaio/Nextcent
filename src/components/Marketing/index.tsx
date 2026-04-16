
import { FaArrowRight } from "react-icons/fa"; 
import img1 from "../../assets/Marketing/image1.png";
import img2 from "../../assets/Marketing/image2.png";
import img3 from "../../assets/Marketing/image3.png";

const Marketing = () => {
  const blogs = [
    { id: 1, img: img1, title: "Creating Streamlined Safeguarding Processes with OneRen" },
    { id: 2, img: img2, title: "What are your safeguarding responsibilities and how can you manage them?" },
    { id: 3, img: img3, title: "Revamping the Membership Model with Triathlon Australia" },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          The Nextcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community 
          are increasing their membership income and lot's more.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative flex flex-col items-center">
            
            <img 
              src={blog.img} 
              alt="Marketing" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            
       
            <div className="bg-[#F5F7FA] p-4 shadow-lg rounded-lg w-[85%] -mt-16 text-center z-10 border border-gray-100">
              <p className="text-gray-600 font-semibold mb-4">
                {blog.title}
              </p>
              <a 
                href="#" 
                className="text-[#43A046] font-bold flex items-center justify-center gap-2 hover:text-[#388E3C] transition-colors"
              >
                Read more <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketing;