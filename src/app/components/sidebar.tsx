import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FiMessageCircle } from 'react-icons/fi';
import { GoBell } from "react-icons/go";
import { IoLogOutOutline } from 'react-icons/io5';
import { LiaHorseHeadSolid } from 'react-icons/lia';
import { LuFlag } from "react-icons/lu";
import { PiShoppingBagLight } from 'react-icons/pi';
import { RiUserSettingsLine } from 'react-icons/ri';


function Sidebar() {
  return (
    <div className='bg-[#F7F7F9] py-4 text-white h-screen shadow-r-lg p-4'>
        <div className='flex justify-between items-center'>
            <Image src="/Purple logo.png" alt="" width={100} height={100}/>
            <button className='flex items-center bg-white rounded-full relative p-2 shadow-sm'>
              <GoBell className='text-[26px] text-[black] p-1'/>
             <span className='w-[9px] h-[9px] rounded-[30px] bg-[#f02d2d] absolute top-2 right-2'>&nbsp;</span>   
            </button>
        </div>
        
        {/* --------- Menu Tabs [Start] ---------- */}
      <div className='text-[#65626C] mt-5 space-y-2'>
        <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm' href=""><LuFlag className='text-[22px]'/>Browse Events</Link>
        <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm' href=""><PiShoppingBagLight className='text-[22px]'/>My Events</Link>
        <div className='flex justify-between items-center  hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm'>
        <Link className='flex items-center gap-5' href=""><FiMessageCircle className='text-[22px]'/>Messages</Link>
             <span className='w-[20px] h-[20px] rounded-[30px] bg-[#f02d2d] text-[white] flex justify-center items-center'>1</span>   
        </div>
        <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm' href=""><LiaHorseHeadSolid className='text-[22px]' />My Horses</Link>
        <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm' href=""><RiUserSettingsLine className='text-[22px]' />My Points</Link>
        <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm' href=""><CgProfile className='text-[22px]'/>My Profile</Link>
      </div>
        {/* --------- Menu Tabs [End] ---------- */}
        
        {/* --------- Logout Tabs [Start] ---------- */}
        <Link className='flex items-center gap-2 text-[#65626C] hover:bg-white hover:text-[#731CEB] p-2 rounded-md hover:shadow-sm absolute bottom-5
        ' href=""><IoLogOutOutline className='text-[22px]'/>Sign out</Link>
        {/* --------- Logout Tabs [End] ---------- */}


    </div>
  )
}

export default Sidebar
