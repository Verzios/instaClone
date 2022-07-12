import React from 'react'
import Search from './search'
import {AiFillHome,AiOutlineInbox,AiOutlineFileAdd,AiOutlineCompass,AiOutlineHeart} from 'react-icons/ai'
export default function Navbar() {
  return (
    <div className='grid grid-cols-3 px-16 border-b-2'>
      <div className='mx-auto'><img src="/images/letter3.png" alt="logo" height={90} width={200}/></div>
      <div className='mt-2'><Search/></div>
      <div className='px-12 mt-6'>
        <AiFillHome className='inline-block hover:cursor-pointer mx-3' size={25}/>
        <AiOutlineInbox className='inline-block hover:cursor-pointer mx-3' size={25}/>
        <AiOutlineFileAdd className='inline-block  hover:cursor-pointer mx-3' size={25}/>
        <AiOutlineCompass className='inline-block hover:cursor-pointer mx-3' size={25}/>
        <AiOutlineHeart  className='inline-block hover:cursor-pointer mx-3' size={25}/>
        <img src="/images/default_avatar.jpeg" width={25} className="inline-block hover:cursor-pointer mx-3" style={{borderRadius:'100%',borderColor:'red',border:"1px solid"}}/>
      </div>
    </div>
    
  )
}
