
import { currentUser } from "@clerk/nextjs/server"
import { FC } from "react"

// components
import Logo from "@/components/shared/Logo"
import UserInfo from "@/components/dashboard/sidebar/User-info"

interface SideBarProps {
  isAdmin?: boolean
}

// <SideBar isAdmin={}/>
export default async function Sidebar({ isAdmin }: SideBarProps) {
  // get user's role
  const user = await currentUser()

  return (
    <div className="w-[300px] border-r h-screen p-4 flex flex-col fixed top-0 left-0 bottom-0">
      <Logo width="100%" height="180px" />
      <span className="mt-3" />
      {user && <UserInfo user={user} />}
    </div>
  )
}