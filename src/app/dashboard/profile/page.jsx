'use client'

import UseAuth from "@/app/ContextApi/UseAuth";
import Image from "next/image";
import Link from "next/link";


export default function Profile() {
  const { user } = UseAuth();

  return (
    <div className="min-h-screen  text-[#F8EDDF]">
    
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-[#F8EDDF] p-2 rounded-full shadow-lg">
          <Image
            src={user?.photoURL || '/default-profile.png'} 
            alt={user?.displayName || "User"}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#122823]"
          />
        </div>
   

      {/* Profile Card */}
      <div className="flex justify-center pt-36 px-4">
        <div className="bg-[#F8EDDF] text-[#122823] shadow-lg border rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-semibold">{user?.displayName || "User Name"}</h2>
          <p className="text-sm text-[#444] mt-1">Email: {user?.email || "user@example.com"}</p>

          <p className="text-sm text-[#555] mt-4">
            Welcome to your profile! Here, you can manage your account information and preferences.
          </p>

          <Link
            href="/dashboard/update-profile"
            className="mt-4 inline-block w-full text-center bg-[#122823] text-white py-2 rounded-md transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      </div>

  );
}
