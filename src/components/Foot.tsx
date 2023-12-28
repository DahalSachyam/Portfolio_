
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export const Foot = () => {
  return (

    <div className='bg-white/70 m-auto py-8 flex justify-center relative'>
        <a className='pl-4 m-4' href='https://github.com/dashboard' target='_blank'><FaGithub size={40}/>
</a>
        <a className='pl-4 m-4 ' href='https://www.facebook.com/sachyam.dahal' target='_blank'><FaFacebook size={40} />
</a>
        <a className='pl-4 m-4' href='https://www.instagram.com/sachyamdahal/' target='_blank'><FaInstagram size={40} />
</a>
        <div className='text-bold text-2xl absolute bottom-0 '>Made with React from Scratch</div>
    </div>

  )
}
