import Image from "next/image";

import { lusitana } from "../ui/fonts";


export default function Loading() {

    return  <div>
        <h2 className={`${lusitana.className}  text-xl text-gray-800 md:text-3xl md:leading-normal `}>Dashboard is Loading, In the meantime, you can check other Pages.</h2>
       <Image src="/loading.gif" alt="loading..." width={50} height={50}></Image>
    </div>

    
  }