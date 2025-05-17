'use client';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import { useState,useEffect } from "react";



export default function allProducts() {
  const [data,setData] = useState([]);

  //get data ...........

  useEffect(()=>{
   axios
   .get('https://crud-with-next-js-pxle.vercel.app/api/products')
   .then(res=>setData(res.data))
   .catch(e=>console.log(e))
  },[axios,setData])

  console.log(data);


  //delete functionality.........
  // const handleDelete = async(id) => {

  //  await axios
  //   .delete(`http://localhost:3000/api/products/${id}`)
  //   .then((res)=>console.log(res.data))
  //   .catch((e)=>console.log(e.message))

  // } className='grid grid-cols-4 gap-4 w-11/12 mx-auto'



  return (
    <div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>
        {
          data.map(card=>(
            <div>
          
            <Image
            className='rounded-3xl h-[200px]'
             src={card.photo} alt='image' width={300} height={300} />
               <p className='font-extrabold text-xl'>{card.title}</p>
               <Link href={`/all-products/${card._id}`} className='btn bg-[#122823] text-white hover:bg-[#F8EDDF] hover:text-[#122823]'>View details</Link>
          
            </div>
          ))
        }
      </div>
      </div>

  )
}
