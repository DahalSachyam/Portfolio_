

const AboutmeItems = ({Question,Answer}:{Question:string, Answer:string}) => {
    
  return (
    <ol className='flex flex-col border-l border-stone-50 pb-7 mt-4 ml-4 '>
        <div className="w-3 h-3 bg-blue-300 border-white rounded -left-1.5  "></div>
        <div className="cursor-default hover:scale-110 ease-in-out duration-200 bold mr-[50%] ml-5 text-2xl text-white text-center bg-black/40 rounded-3xl md:text-4xl">{Question}</div>
        <li className="pl-4 text-2xl lg:text-3xl md:text-[20px] text-white">{Answer}</li>
    </ol>
  )
}

export default AboutmeItems