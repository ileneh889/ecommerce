import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { create } from "domain";


export default clerkMiddleware((auth, req, next)=>{
// 創建一個用來判斷請求路徑是否匹配特定模式的函式
const protectedRoutes = createRouteMatcher(["/dashboard/(.*)"])
// 若符合createRouteMatcher所列的路徑，就予以保護
if (protectedRoutes(req)) auth().protect()
});

export const config = {
 matcher: [
   // Skip Next.js internals and all static files, unless found in search params
   '/((?!_next|(?:\\.(?:jpg|jpeg|gif|png|svg|ico|css|js|woff2?|ttf))$).*)',
   // always run for API routes
   '/(api|trpc)(.*)',
 ],
};