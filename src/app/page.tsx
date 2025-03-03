import Image from "next/image";

// ui
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

// next-themes 
import ThemeToggle from "@/components/shared/Theme-toggle";


export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-x-5 justify-end">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500 font-barlow">Home page</h1>
    </div>
  );
}
