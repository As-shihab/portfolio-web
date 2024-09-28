
import React from 'react'
import { TbLoader3 } from "react-icons/tb";
export default function card_loader() {
  return (

<div className="card p-2 overflow-hidden relative rounded-lg bg-slate-700">

<div className='w-full h-52 bg-slate-800 flex justify-center items-center rounded animate-pulse'><TbLoader3  className='animate-spin text-3xl'/></div>

<div className="flex justify-between items-center">
    <div className="text-left">
    <div className="mt-2 px-2 flex items-center ">Relesed : <div className="h-3 w-12 ml-2 rounded-lg bg-slate-600 animate-pulse"></div></div>
    <div className="mt-2 px-2 flex items-center">Code : <div className="w-12 h-3  ml-2 rounded-lg animate-pulse   bg-slate-500"></div></div>
    </div>

    <button className='px-5 py-1 rounded-lg border hover:bg-sky-900 '><div className="h-3  ml-2 rounded-lg w-12 bg-slate-500 animate-pulse "></div></button>
</div>


</div>
  )
}
