import { allCollection } from "@/app/lib/Database";
import { NextResponse } from "next/server";


export const POST = async (req) => {
  const collection = await allCollection("products");
  const data = await req.json();
  const result = await collection.insertOne(data);
  return NextResponse.json({ success: true },result);
};

export const GET = async (req) => {
  const collection = await allCollection("products");
  const data = await collection.find().toArray();
  return NextResponse.json(data);
};