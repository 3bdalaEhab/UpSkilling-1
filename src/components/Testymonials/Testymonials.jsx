import Title from "../Title/Title";
import Ellipse1 from "/src/assets/Ellipse1.png";

export default function Testimonials() {
    return (
      <div>
        <Title title={"Testimonials"}/>

          <div className="flex flex-wrap justify-center px-5 gap-10 ">
              {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex gap-y-2  sm:flex-nowrap flex-wrap gap-x-5 p-7 lg:w-[45%]  sm:justify-between  justify-center border border-[#6D91EE] rounded-[40px]">
                      <img className='w-[80px] h-[80px]   ' src={Ellipse1} alt="avatar" />
                      <div className="info gap-y-2 flex flex-col justify-between sm:text-start text-center">
                          <h2 className="font-[700] text-[#6D91EE]">Courtney Henry</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                          <div className="font-[700] text-[#6D91EE] stars flex gap-x-1 sm:mx-0  mx-auto">
                              {[...Array(5)].map((_, index) => (
                                  <i key={index} className="fa-solid fa-star"></i>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    );
}
