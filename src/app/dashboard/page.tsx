import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export default async function DashboardPage() {
  /// based on 登入者身分決定URL
  // 確定登入者身分 (clerk API)
  const user = await currentUser()
  // redirect to different page based on role
  if (!user?.privateMetadata?.role || user?.privateMetadata?.role === "USER") redirect("/")  //即使用戶數據不完整或角色未設置，系統也能有默認行為
  if (user.privateMetadata?.role === "ADMIN") redirect("/dashboard/admin")
  if (user.privateMetadata?.role === "SELLER") redirect("/dashboard/seller")

}
