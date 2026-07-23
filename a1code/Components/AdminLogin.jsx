import React from 'react'

const AdminLogin = () => {
  return (
     <div className="p-8  bg-white w-100">
        <h1 className="text-center font-bold text-2xl">ADMIN LOGIN</h1>
        
        <form action="" className="mt-3">
            
            <input type="text" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your email id' />
            
            <input type="password" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='********' />
         
            <div className="flex justify-center items-center mt-4">
            <button className="px-5 py-3 text-white w-full bg-blue-500">
               Login Now
            </button>
            </div>
            
        </form>
    </div>
  )
}

export default AdminLogin