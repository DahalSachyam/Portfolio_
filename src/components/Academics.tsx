
import AcademicsItem from './AcademicsItem'
import { GiBookshelf } from "react-icons/gi";
const Academics = () => {
  return (
    <div className='bg-black'>
    <div id="academics" className=' bg-black max-w-[1040px] m-auto pl-8 md:pl-20 p-4 py-16'>
        <h1 className="font-bold text-4xl text-white rounded-full flex justify-center">
            {" "}
            Academics  <GiBookshelf size={0} />{" "}
        </h1>
        <p className='text-center py-8 text-2xl text-white'> The resourse below is a refernece for my academics progression</p>
        <div className='grid md:grid-cols-2 gap-12'>
            <AcademicsItem img={"images/Sachyam_dahal_GceA2copy.jpeg"} title={'A2'}/>
            <AcademicsItem img={"images/Sachyam_dahal_GceAScopy.jpeg"} title={"AS"}/>
            <AcademicsItem img={"images/Sachyam_dahal_grade10copy.jpeg"} title={"Grade10"}/>
            <AcademicsItem img={"images/Sachyam_dahal_mid_termcopy.jpeg"} title={"A2 Mid Terms"}/>
            <AcademicsItem img={"images/SAT.jpeg"} title={"SAT results"} />
        </div>

    </div>
    </div>
  )
}

export default Academics