// React, Next
import Image from "next/image";

// logo image
import LogoImg from "../../../public/assets/icon/logo-1.png"

// define props style  
interface LogoProps {
  width?: string,
  height?: string,
}


export default function Logo({ width, height }: LogoProps) {
  return (
    <div className="Z-50" style={{ width, height }}>
      <Image
        src={LogoImg}
        alt="GoShop"
        className="w-full h-full object-cover overflow-visible"
      />
    </div>
  )
}
