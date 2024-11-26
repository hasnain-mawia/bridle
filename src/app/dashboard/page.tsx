"use client"
import Image from 'next/image';
import Link from 'next/link';
import { CiBookmark } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { ImSpinner8 } from "react-icons/im";
import { MdBookmark, MdDateRange} from 'react-icons/md';
import { TbCurrentLocation } from 'react-icons/tb';
import data from '../components/data';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DatePickerDemo } from '@/components/ui/datePicker';


function page() {
  const [bookmark, setBookMark] = useState<any>(false); 
  const [search, setSearch] = useState<any>(""); 

  const ActiveMark = (id:number) =>{
    setBookMark((prevBookmarks:any) => ({
      ...prevBookmarks,
      [id]: !prevBookmarks[id],  
    }));
    toast.success('Bookmark Successfully');
  }
  return (
    <>
    <div className='border-b-2 border-[#dbdbdb] flex items-center gap-3 pt-3 px-2'>
      <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] hover:border-b-[3px] hover:border-[#731CEB] border-b-[3px] border-transparent p-2' href="">All Events</Link>
      <Link className='flex items-center gap-5 hover:bg-white hover:text-[#731CEB] hover:border-b-[3px] hover:border-[#731CEB] border-b-[3px] border-transparent p-2' href="">Saved Events (2) </Link>
      </div>
        <h3 className='text-[22px] font-semibold p-3'>Feature Events</h3>

        {/* --------- Feature Carousel [Start] ---------- */}
      <Carousel className="mx-3" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
      <CarouselItem className="basis-1/4">
        {/* --------- Feature Section [Start] ---------- */}
        <div className='flex justify-between border-[#dadada] border-[2px] rounded-lg gap-1 my-2'>
        <Image src="/rider.png" alt="" width={80} height={100}/>
        <div className='space-y-1'><h3 className='text-[14px]'>Underground bull riders Membership</h3>
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><TbCurrentLocation/> Bull Ring</span> 
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><MdDateRange/> Jan 1 - Dec 31,2...</span> 
        </div>
        <div>
        <button className='outline-none p-2'><MdBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/></button>  
        </div>  
        </div>
        </CarouselItem>
        {/* --------- Feature Section [End] ---------- */}
    <CarouselItem className="basis-1/4">
      {/* --------- Feature Section [Start] ---------- */}
      <div className='flex justify-between border-[#dadada] border-[2px] rounded-lg gap-1 my-2'>
        <Image src="/rider.png" alt="" width={80} height={100}/>
        <div className='space-y-1'><h3 className='text-[14px]'>Horses in two lines</h3>
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><TbCurrentLocation/> Bull Ring</span> 
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><MdDateRange/> Jan 1 - Dec 31,2...</span> 
        </div>
        <div>
        <button className='outline-none p-2'><CiBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/></button>  
        </div>  
        </div>
        {/* --------- Feature Section [End] ---------- */}
    </CarouselItem>
    <CarouselItem className="basis-1/4">
    {/* --------- Feature Section [Start] ---------- */}
<div className='flex justify-between border-[#dadada] border-[2px] rounded-lg gap-1 my-2'>
        <Image src="/rider.png" alt="" width={80} height={100}/>
        <div className='space-y-1'><h3 className='text-[14px]'>Underground bull riders Membership</h3>
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><TbCurrentLocation/> Bull Ring</span> 
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><MdDateRange/> Jan 1 - Dec 31,2...</span> 
        </div>
        <div>
        <button className='outline-none p-2'><MdBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/></button>  
        </div>  
        </div>
        {/* --------- Feature Section [End] ---------- */}
    </CarouselItem>
    <CarouselItem className="basis-1/4">
     {/* --------- Feature Section [Start] ---------- */}
     <div className='flex justify-between border-[#dadada] border-[2px] rounded-lg gap-1 my-2'>
        <Image src="/rider.png" alt="" width={80} height={100}/>
        <div className='space-y-1'><h3 className='text-[14px]'>Horses in two lines</h3>
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><TbCurrentLocation/> Bull Ring</span> 
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><MdDateRange/> Jan 1 - Dec 31,2...</span> 
        </div>
        <div>
        <button className='outline-none p-2'><CiBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/></button>  
        </div>  
        </div>
        {/* --------- Feature Section [End] ---------- */}
    </CarouselItem>
    <CarouselItem className="basis-1/4">
     {/* --------- Feature Section [Start] ---------- */}
     <div className='flex justify-between border-[#dadada] border-[2px] rounded-lg gap-1 my-2'>
        <Image src="/rider.png" alt="" width={80} height={100}/>
        <div className='space-y-1'><h3 className='text-[14px]'>Horses in two lines</h3>
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><TbCurrentLocation/> Bull Ring</span> 
         <span className='flex items-center text-[12px] text-[#8a8a8a]'><MdDateRange/> Jan 1 - Dec 31,2...</span> 
        </div>
        <div>
        <button className='outline-none p-2'><CiBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/></button>  
        </div>  
        </div>
        {/* --------- Feature Section [End] ---------- */}
    </CarouselItem>
    </CarouselContent>
      <CarouselPrevious />
    <CarouselNext />
  </Carousel>
        {/* --------- Feature Carosal [End] ---------- */}

      <div className='flex p-3 gap-3'>
      <div>
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Live</Button>
        <Button variant="secondary">Upcoming</Button>
      </div>
      <div>
      <Select>
      <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="Location">Location</SelectItem>
      <SelectItem value="Location 1">Location 1</SelectItem>
      <SelectItem value="Location 2">Location 2</SelectItem>
    </SelectContent>
    </Select>

    </div>
      <div>
        <DatePickerDemo/>
    </div>
      <div className='flex items-center px-2 py-1 border-[1px] border-[#dbdbdb] text-[14px] rounded-md gap-2'>
      <FaSearch className='text-[18px] text-[#3d3d3d]'/> 
      <input onChange={(e)=> setSearch(e.target.value)} className='w-full outline-none' type="text" placeholder='Search by event name...'/>
    </div>
    </div>

    <div className='p-3'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      {data.filter((filterdata:any)=> filterdata.title.toLowerCase().includes(search)).map((dataValue:any)=> {
           return ( 
          <div key={dataValue.id}>
        <div className='flex justify-between gap-3'>
        <div className='flex items-center gap-3'>
        <div className='bg-[#e9e9e9] py-1 px-3 rounded-md text-center'>
          <h3 className='text-[purple] text-[14px] font-semibold'>{dataValue.month}</h3>
          <h3 className='text-[black] text-[19px] font-semibold'>{dataValue.date}</h3>
        </div>
        <div>
          <h3 className='font-semibold'>{dataValue.title}</h3>
          <p className='text-[gray] text-[14px]'>{dataValue.description}</p>
        </div>
        </div>
        <button onClick={()=>ActiveMark(dataValue.id)} className='outline-none p-2'>{ !bookmark[dataValue.id] ? <CiBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/> :<MdBookmark className='border-[1px] border-[#adadad] rounded-md text-[25px] p-1 text-[#731CEB]'/>}</button>  
      </div>
      </div>)
      })
    }
    </div>
    </div>
    </>
  )
}

export default page
