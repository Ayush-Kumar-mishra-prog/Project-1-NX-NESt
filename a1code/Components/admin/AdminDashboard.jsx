"use client"

import { BookUserIcon, BrickWallIcon, BusIcon, CatIcon, IndianRupee, LayoutGrid, PersonStanding, WorkflowIcon } from "lucide-react"
import {Button} from '@mui/material'
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import api from "../../app/lib/axios";

const AdminDashboard = () => {

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
      icon: <BusIcon size={30} className="text-zinc-800" />,
      value: 1500
    },
    {
      name:"Categories",
      icon: <LayoutGrid size={30} className="text-zinc-800" />,
      value: 1500
    },
  ]

   const { user, setUser } = useUserContext();
   const router = useRouter()

   const handleLogout = async()=>{
      const confirmLogout = window.confirm("Are you sure to logout");
          if (!confirmLogout) return;
      
          try {
            const response = await api.post("/auth/api/v1/auth/logout");
            if (response.status === 200) {
              setUser(null);
              router.push("/authentication");
            }
          } catch (error) {
            console.error("Logout failed:", error);
            setUser(null);
            router.push("/authentication");
          }
   }

   
   
  return (
   <>
   <div className="">
    <div className="flex items-center gap-3">
        <BrickWallIcon size={40} className="text-zinc-800 font-bold" />
        <h1 className="text-4xl font-bold"> Hello Admin</h1>
    </div>
    <div className="mt-4 mb-4 gap-3 flex flex-row">
      <Button onClick={handleLogout}  variant="contained" color="primary">
        logout
      </Button>
      <Button onClick={()=>router.push('/')}  variant="outlined" color="primary">
        Home Page
      </Button>
      </div>
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 mt-10">
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

export default AdminDashboard