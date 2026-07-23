"use client"
import { useState } from 'react'

const Login = () => {
    const [mode,setMode] = useState("login")

    const handleMode = ()=>{
        if(mode ==="login"){
            setMode("register")
        }
        if(mode ==="register"){
            setMode("login")
        }
    }

  return (
    <div className="p-8  bg-white w-100">
        <h1 className="text-center font-bold text-2xl">{
            mode==="login" ?"Welcome Back":"Register Your Account"}</h1>
        
        <form action="" className="mt-3">
            
            <input type="text" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your email id' />
            
            <input type="password" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='********' />
            {
                mode ==="register" && (
                    <>
                    
            <input type="text" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='Enter your username' />
            </>
                )
            }
            <div className="flex justify-center items-center mt-4">
            <button className="px-5 py-3 text-white w-full bg-blue-500">
                {
                    mode ==="login" ? "Submit Now":"Aplly Now"
                }
            </button>
            </div>
            <p className="text-center text-gray-700 mt-4">
                {
                    mode === "login"?"Don't have an account ?":"Already have an account"
                } <span onClick={handleMode} className="hover:underline text-blue-500 cursor-pointer ml-1">{
                    mode==="login"?"Register account":"Login"}</span>
            </p>
        </form>
    </div>
  )
}

export default Login