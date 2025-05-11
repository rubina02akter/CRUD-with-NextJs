'use client';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";



export default function Management() {
  const [data,setData] = useState([]);

  //get data ...........

  useEffect(()=>{
   axios
   .get('http://localhost:3000/api/products')
   .then(res=>setData(res.data))
   .catch(e=>console.log(e))
  },[axios,setData])

  console.log(data);


  //delete functionality.........
  const handleDelete = async(id) => {

   await axios
    .delete(`http://localhost:3000/api/products/${id}`)
    .then((res)=>console.log(res.data))
    .catch((e)=>console.log(e.message))

  

  }



  return (
    <div className="my-4">
   
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {data.map((card) => (
        <div
          key={card._id}
          className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center"
        >
          <Image
            src={card.photo}
            alt={card.title}
            width={300}
            height={300}
            className="rounded-2xl h-64 w-full object-cover mb-4 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
  
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleDelete(card._id)}
              className="btn bg-red-700 text-white hover:scale-105 transition-transform duration-200"
            >
             <FaTrash /> Delete
            </button>
            <Link
              href={`/dashboard/details/${card._id}`}
              className="btn bg-[#122823] text-amber-50 hover:scale-105 transition-transform duration-200"
            >
             <FaEdit /> Update
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}
