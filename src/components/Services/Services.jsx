import Title from "../Title/Title";
import image1 from "/src/assets/1.png";
import image2 from "/src/assets/2.png";
import image3 from "/src/assets/3.png";

export default function Services() {
  const images = [image1, image2, image3];

  return (
    <div className="">
      <Title title={"Services"} />

      <div className='flex  flex-wrap justify-center px-5   gap-5'>
        {images.map((image, index) => (
          <div className=' lg:w-[385px] sm:w-[350px] w-[300px]   shadow-md rounded-[30px] overflow-hidden' key={index}>
            <img className=" w-full" src={image} alt='' />

            <div className=' p-4 bg-white flex flex-col justify-evenly  text-[#324473]'>
              <h2 className="font-bold mb-2 text-[22px]">Lorem Ipsum</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
          </div>
        ))}
      </div>
      <button className="rounded-full block mx-auto  my-20 px-10 py-3  bg-[#6D91EE] text-white  font-[700] ">Help Me</button>
    </div>
  );
}
