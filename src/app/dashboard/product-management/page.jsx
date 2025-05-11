'use client';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";



export default function Management() {
  const [data,setData] = useState([]);

  //get data ...........

  useEffect(()=>{
   axios
   .get('https://crud-operation-with-next-js.vercel.app/api/products')
   .then(res=>setData(res.data))
   .catch(e=>console.log(e))
  },[axios,setData])

  console.log(data);


  //delete functionality.........
  const handleDelete = async(id) => {

   await axios
    .delete(`https://crud-operation-with-next-js.vercel.app/api/products/${id}`)
    .then((res)=>console.log(res.data))
    .catch((e)=>console.log(e.message))

  }



  return (
    <div>
      <h2>All Products</h2>
      <div>
        {
          data.map(card=>(
            <>
            <p>{card.title}</p>
            <Image src={card.photo} alt='image' width={300} height={300} />
            <button
            onClick={()=>handleDelete(card._id)}
             className='btn'>Delete</button>
            <Link href={`/dashboard/details/${card._id} `}className='btn'>Update</Link>
            </>
          ))
        }
      </div>
    </div>
  )
}
