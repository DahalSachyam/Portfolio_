
const AcademicsItem = ({img, title}:{img:string , title:string } )=> {
  return (

    <div className='text-white h-auto hover:scale-110 ease-in-out duration-200'>
        <img className="shadow-lg shadow-red-400" src={img} />
        <div>
            <h1 className="text-center h-auto ">{title}</h1>
        </div>
    </div>
   )
}

export default AcademicsItem