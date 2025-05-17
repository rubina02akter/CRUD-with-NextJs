// app/all-products/[id]/page.jsx

import Image from "next/image";

export default async function ProductPage({ params }) {
  const { id } = params;
  const data = await fetch("https://crud-with-next-js-pxle.vercel.app/api/products");
  const result = await data.json();
  const productInfo = result.find((item) => item._id === id);



  return (
  
    <div className="hero min-h-screen px-4 py-10">
    <div className="hero-content flex-col lg:flex-row gap-10 max-w-6xl w-full">
      
      {/* Image Section */}
      <div className="relative group">
        <Image
        alt='image' width={300} height={300}
          src={productInfo.photo}
        
          className="w-[800px] h-80 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
       
      </div>
  
      {/* Content Card */}
      <div className=" bg-gradient-to-br from-[#122823] to-[#F8EDDF] bg-opacity-80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 w-full transition hover:shadow-2xl hover:scale-[1.02] duration-300 text-white text-lg font-thin">
        <h2 className="text-4xl font-bold  mb-4">{productInfo.title}</h2>
        <p className=" mb-2">Category: <span>{productInfo.category}</span></p>
        <p className=" mb-4">{productInfo.description}</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-thin  mb-4">
          <div>
            <span>Added By:</span> {productInfo.user}
          </div>
          <div>
            <span>Email:</span> {productInfo.details}
          </div>
          <div>
            <span>Date:</span> {productInfo.dateOnly}
          </div>
        </div>
  
        <div className="card-actions mt-6 flex justify-end items-center">
         
          <a href="/all-products" className="btn bg-[#122823] text-amber-50 hover:scale-105 transition-transform">Back</a>
        </div>
      </div>
    </div>
  </div>
  
  
  
   
  );
}
