import Rectangle2 from '../../assets/Rectangle2.png';

export default function AboutUs() {
    return (
        <div className="AboutBg relative flex flex-wrap justify-center items-center">
            <div className="where min-h-[90vh] px-5 flex flex-wrap justify-around items-center text-white">
                <div className="flex flex-col lg:mb-40 justify-center lg:items-start items-center gap-y-3 lg:w-[35%] w-[100%]">
                    <h2 className="font-[900] my-5 sm:text-[64px] text-[55px]">About Us</h2>
                    <p className="sm:text-[18px] font-[700] lg:text-start text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                    <div>
                        <img src={Rectangle2} alt="asd" />
                    </div>
                </div>
                <div className="blue flex flex-col mb-20 lg:mb-0 text-center lg:text-end gap-y-3 lg:w-[35%] w-[100%] z-20">
                    <p className="sm:text-[60px] text-[50px] font-[900]">Where</p>
                    <p className="ms:text-[18px] font-[700] leading-[24px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>
            <div className="flex absolute mt-3 bottom-7 ">
                <button className="rounded-full px-8 py-3 bg-[#EEC04B] text-[#515151] text-[24px] font-[700] ">Experts</button>

            </div>
        </div>
    );
}
