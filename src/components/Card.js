import React, { useEffect, useState } from "react";

import { BsBuildings, BsArrowsMove } from "react-icons/bs";
import { MdOutlineBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import {AiOutlineHeart} from 'react-icons/ai'

import axios from 'axios'

import { Urls } from "../Urls";
export const Card = () => {
    const [property,setProperty] = useState([]);
    const [showMore, setShowMore] = useState(3);
    
    useEffect(()=>{
        const getProperty = async()=>{
            await axios.get(`${Urls}property?limit=${showMore}`)
            .then((response)=>response)
            .then((data)=>{
                setProperty(data.data.data)
            })
        }
        getProperty();
    },[property])


    const handleShowMore = () =>{
        setShowMore(showMore + 3)

    }

  return (
    <section className="w-full">
        <div className="w-full grid grid-cols-3 gap-8">
            {property.map((id)=>(
               

                <div className="h-[34vw] bg-[#ffffff] flex flex-col  p-4 rounded-2xl relative" key={id._id}>
                    <div className="basis-1/2 relative">
                    <img src={id.image} alt="Property Image"  className="rounded-lg"/>

                    <p className="bg-white  text-[#3e77ce] font-medium px-4 py-2 rounded-full absolute left-2 top-2">
                        For {id.propertyType}
                    </p>
                    <button className="bg-white text-[#3e77ce] text-lg  px-2 py-2 rounded-full absolute right-2 top-2">
                        <AiOutlineHeart/>
                    </button>
                    </div>
                    <div className="basis-1/2 grid mt-4">
                    <div>
                        <i></i>
                        <p>{id.location}</p>
                    </div>
                    <h2 className="font-semibold text-[1.2em]">
                        {id.name}
                    </h2>
                    <div className="flex flex-row items-center justify-around gap-4">
                        <div>
                        <i>
                            <BsBuildings />
                        </i>
                        <p className="mt-2">{id.room} Room</p>
                        </div>
                        <div>
                        <i>
                            <MdOutlineBed />
                        </i>
                        <p className="mt-2">{id.bed} Bed</p>
                        </div>
                        <div>
                        <i>
                            <LiaBathSolid />
                        </i>
                        <p className="mt-2">{id.bath} Bath</p>
                        </div>
                        <div>
                        <i>
                            <BsArrowsMove />
                        </i>
                        <p className="mt-2">{id.area} sft</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="font-semibold text-lg">
                        ${id.price} <span className="text-sm">/month</span>
                        </h2>
                        <a  href={`/Home/${id._id}`} className="border-[#4889EC] border-2 text-[#3e77ce] font-medium px-4 py-2 rounded-full">
                        Read More
                        </a>
                    </div>
                    </div>
                </div>
                
            ))}
        </div>
        <div className="flex justify-center items-center">
            <button className="  px-4 py-2 bg-blue-700 mt-10 rounded-full text-white font-medium" onClick={handleShowMore}>Show More</button>
        </div>

    </section>

      
   
  );
};
