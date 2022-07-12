import React from 'react'
import {AiOutlineHeart,AiOutlineComment,AiOutlineShareAlt,AiOutlineSave} from 'react-icons/ai'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
export default function Upload_card() {
  return (
    <div class=" max-w-md mx-32 mt-12 bg-white rounded-lg border shadow-md dark:bg-gray-100 dark:border-gray-200">
        <div class="grid grid-cols-12 items-start mb-4 px-0 pt-4">
            <img src="/images/default_avatar.jpeg" width={25} className="col-span-2 inline-block hover:cursor-pointer mx-3" style={{borderRadius:'100%',borderColor:'red',border:"1px solid"}}/>
            <h5 class="col-span-8 mt-1 text-md font-bold leading-none text-gray-900 dark:text-black-500">Username</h5>
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="col-span-2 mx-auto text-right hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
                <svg class="w-5  h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
        </div>
        <div>
            <img src="/images/test2.jpeg" className='hover:cursor-pointer'/>
        </div>
        <div class="grid grid-cols-12 items-start py-4 pl-4 gap-12">
            <div>
                <AiOutlineHeart size={25} className="hover:cursor-pointer"/> 
            </div>
            <div>
                <AiOutlineComment size={25} className="hover:cursor-pointer"/> 
            </div>
            <div>
                <AiOutlineShareAlt size={25} className="hover:cursor-pointer"/> 
            </div>
            <div className='col-start-9'>
                <AiOutlineSave size={25} className="hover:cursor-pointer"/> 
            </div>
        </div>
        <div className='px-4 py-2'>
            <img src="/images/test2.jpeg" style={{borderRadius:'100%'}} className="inline-block" width={25}/>
            <img src="/images/test2.jpeg" style={{borderRadius:'100%'}} className="inline-block" width={25}/>
            <h5 className='inline-block text-sm ml-2'>Liked by username1 and 3522 others</h5>
        </div>
        <div className='px-4 overflow-hidden '>
            <h3 style={{fontWeight:700,fontSize:12}} className="inline-block truncate">Username</h3>
            <h6 className='inline-block mx-2 truncate w-[200px]' style={{fontSize:12}}>Description asdasdasd adasdsad gsgdsgsgsd s dsfsdfs fs</h6>
        </div>
        <div className='px-4 overflow-hidden '>
            <h6 className='inline-block text-gray-400  w-[200px] hover:cursor-pointer' style={{fontSize:12}}>View all 70 comments</h6>
        </div>
        <div className='px-4 overflow-hidden border-t-2 py-2'>
            <HiOutlineEmojiHappy size={25} className="inline-block"/>
            <input type="search" id="default-search" class="inline-block mx-2 p-1 pl-4 w-[300px] text-sm text-gray-900 bg-gray-50 rounded-xl    dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Add a comment ..." />
            <button className='text-cyan-300 mx-4 inline-block'>Post</button>
        </div>
    </div>
  )
}
