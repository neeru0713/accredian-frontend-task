import React from 'react'
import ProgramsDetailPage from './ProgramsDetailPage'
const Table = () => {
  return (
    <table className="flex flex-col m-2 gap-4 border rounded-lg shadow-lg w-[80%]">
    <thead className="flex w-full bg-[#afcef7] text-white items-center rounded-tl-lg rounded-tr-lg w-[100%]">
        <h1 className="font-semibold text-left text-md px-4 py-4 rounded-md text-[#1250a0] w-[60%]">Programs</h1>
        <div className="border h-[100%] border-1 border-gray-400"></div>
        <h1 className="font-semibold text-left text-md text-[#1250a0] w-[20%] m-2">Referrer Bonus</h1>
        <div className="border h-[100%] border-1 border-gray-400"></div>
        <h1 className="font-semibold text-left text-md text-[#1250a0] w-[20%] m-2">Referre Bonus</h1>
      </thead>
      <tbody>
      <ProgramsDetailPage/>
      </tbody>
    
    </table>
  )
}

export default Table