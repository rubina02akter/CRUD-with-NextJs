import { allCollection } from "@/app/lib/Database"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async(req,{params}) =>{
  const collection = await allCollection('products')
  const id = params.id;
  
  const result = collection.deleteOne({_id: new ObjectId(id)})
  return NextResponse.json(result)
}

export const GET = async(req,{params})=>{
  const collection = await allCollection('products')
  const {id}=params;
  const result =await collection.findOne({_id: new ObjectId(id)})
  return NextResponse.json(result)
}

export const PUT = async (req, { params }) => {
  const collection = await allCollection("products");
  const id = params.id;
  const body = await req.json();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );

  return NextResponse.json(result);
};

