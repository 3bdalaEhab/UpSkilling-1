
export default function Title({title}) {
  return <>
 <div className="flex justify-center items-center my-20 pt-10">
  <div className="h-20   relative overflow-hidden">
    <div className="border-l-[2px] border-b-[2px] border-[#6D91EE] h-[80px] w-[80px] rotate-[45deg] absolute left-[-3px] "></div>
    <div className="border-r-[2px] border-t-[2px] border-[#6D91EE] h-[80px] w-[80px] rotate-[45deg] absolute right-[-3px] "></div>
    <div className="flex justify-center items-center h-full p-8">
        <h2 className="font-[900] text-3xl md:text-[50px] lg:text-[64px] text-[#6D91EE]">{title}</h2>
    </div>
  </div>
</div>


  
  </>
}
