export default function Home() {
    return (
        <>
            <div className="home my-10 p-5 flex flex-col items-center justify-between h-screen ">
                <div className="  text-[#6D91EE] gap-x-3 leading-[75%]  flex flex-wrap justify-center items-center text-center  h-[20%]">

                    <img className="w-18 sm:w-[80px]" src="../src/assets/Слой2.png" alt="" />

                    <div className="text-center  ">

                        <h2 className="title1 text-5xl  sm:font-normal sm:text-6xl lg:text-6xl  ">Round Rock</h2>
                        <span className="titleUnder1 text-2xl tracking-[8px] ms-1 sm:tracking-[13px] md:ms-3  sm:font-bold">Trush Hauling</span>
                    </div>
                </div>
                <div className="flex mb-10 flex-col items-center justify-around h-[70%] ">

                    <button className="rounded-[15px]  bg-[#6D91EE] text-white text-xl px-5 py-1">Experts</button>

                    <p className="text-[#4F4F4F]  text-center lg:leading-[89.5px] lg:text-7xl md:leading-[40.5px] sm:text-6xl leading-[30.5px] text-5xl  font-light">Lorem <br /> <span className="font-[900] sm:text-6xl text-4xl">Lorem lorem</span></p>
                    <p className="lg:text-[#4F4F4F] text-white text-lg sm:text-xl    text-center   leading-[25.5px] ">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the</p>
                    <button className="rounded-full px-8 py-2 bg-[#6D91EE] text-white text-[24px] font-[700]  ">Experts</button>

                </div>

            </div>
        </>
    );
}
