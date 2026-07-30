"use client"

import { BrickWallIcon, IndianRupee, PersonStanding, WorkflowIcon } from "lucide-react"

const SellerHome = () => {
  const infoCards = [
    {
      name:"Total Users",
      icon: <PersonStanding size={30} className="text-zinc-800" />,
      value: 1000,
    },
    {
      name:"Total Revenue",
      icon: <IndianRupee size={30} className="text-zinc-800" />,
      value: 50000
    },
    {
      name:"Total Orders",
      icon: <WorkflowIcon size={30} className="text-zinc-800" />,
      value: 1500
    }
  ]
   
  return (
   <>
   <div className="">
    <div className="flex items-center gap-3">
        <BrickWallIcon size={40} className="text-zinc-800 font-bold" />
        <h1 className="text-4xl font-bold"> Hello Admin</h1>
    </div>
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-10">
        {infoCards.map((card, index) => (
            <div key={index} className="bg-zinc-200 p-5 rounded-lg shadow-md flex items-center gap-3">
                {card.icon}
                <div>
                    <h2 className="text-lg font-semibold">{card.name}</h2>
                    <p className="text-2xl font-bold">{card.value}</p>
                </div>
            </div>
        ))}
    </div>
   </div>
   </>
  )
}

export default SellerHome