import { redirect } from "next/navigation";
import { ReactNode } from "react";

// clerk
import { currentUser } from "@clerk/nextjs/server"

// components 
import Header from "@/components/dashboard/header/Header"
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  // redirect non-admin user to homepage
  const user = await currentUser();
  if (!user || user.privateMetadata.role !== "ADMIN") redirect("/");

  return (
    <div className="w-full h-full" >
      {/* sidebar */}
      <Sidebar isAdmin />
      <div className="w-full ml-[300px]">
        {/* Header */}
        <Header />
        <div className="w-full mt-[75px] p-4" >{children}</div>
      </div>
    </div>
  )
}
