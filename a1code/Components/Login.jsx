"use client"
import { Button, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useComment } from '../context/ReplyCommentContext'
import { useUserContext } from '../context/UserContext'
import { useForm } from 'react-hook-form'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation';
import api from '../app/lib/axios';
import { useSnackbar } from 'notistack'

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
    const {setUser,user} = useUserContext()
    

const {register,handleSubmit,formState:{errors},reset} = useForm()
    const handleSeedData = ()=>{
  setUser(dummyUserData)
  setLoggedIn(true)
    }

    const router = useRouter()

    const{enqueueSnackbar,closeSnackbar}= useSnackbar()

   const onSubmit = async (data)=>{

    try{
        console.log(data)
     const response = await api.post(`/auth/api/v1/auth/${mode}`,data)
      const responseUser = await api.get("/auth/api/v1/auth/me");
      console.log(response)
          
      setUser(responseUser.data)
     if(mode==="login"){ enqueueSnackbar("You logged in successfully",{variant:"success"})}
      if(mode==="register"){ enqueueSnackbar("You registerd in successfully",{variant:"success"})}
      router.push('/')
    
     
    }catch(error){
        if(error.status ===400){
     { enqueueSnackbar("Invalid creditionals or empty fields",{variant:"error"})}
        }else{
           { enqueueSnackbar("Internal server error",{variant:"error"})} 
        }
    }
  
//   setUser((prev)=>[...prev,data])
//   setLoggedIn(true)
//   reset()
   }

   useEffect(()=>{
if(user){
    console.log(user.full_name,user.username)
    router.replace("/")
     enqueueSnackbar("You already signedin",{variant:"warning"})

}
   },[user])

   

  const loginGoogle = useGoogleLogin({
  onSuccess: codeResponse => console.log(codeResponse),
  flow: 'auth-code',
});

  return (
    <div className="p-8  bg-white w-100">
        <h1 className="text-center font-bold text-2xl">{
            mode==="login" ?"Welcome Back":"Register Your Account"}</h1>
        
        <form action="" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="email" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your email id' {...register("email")} />
            
            <input type="password" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='********' {...register("password")}  />
             <select name="category" id="" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" {...register("role")} >
               <option value="">Select role</option>
              <option value="user" className="w-full p-2 border border-slate-300 border-l-6 rounded-md">user</option>
              <option value="seller" className="w-full p-2 border border-slate-300 border-l-6 rounded-md">seller</option>
             
            </select>
            {
                mode ==="register" && (
                    <>
                    
            <input type="text" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='Enter your username' {...register("username")}  />
            <input type="text" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='Enter your full name' {...register("full_name")}  />
            </>
                )
            }
            <div className="flex justify-center items-center mt-4">
            <Button type='submit' variant='contained' className="px-5 py-3 text-white w-full bg-blue-500">
                {
                    mode ==="login" ? "Login Now":"Register"
                }
            </Button>
            </div>
            <p className="text-center text-gray-700 mt-4">
                {
                    mode === "login"?"Don't have an account ?":"Already have an account"
                } <span onClick={handleMode} className="hover:underline text-blue-500 cursor-pointer ml-1">{
                    mode==="login"?"Register account":"Login"}</span>
            </p>
          
<div className="mt-2 mb-2">
             <Button fullWidth variant='outlined' onClick={loginGoogle} >
                <FcGoogle  className="mr-2" size={25} /> {" "}Google
            </Button>
     
     {/* <GoogleLogin  onSuccess={loginGoogle}
  onError={() => {
    console.log('Login Failed');
  }} /> */}

             </div>
            <div  className="mt-2 w-full bg-[#4267b2] rounded-md flex justify-center items-center">
           
                {/* <FaFacebook className="mr-2" size={25} /> {" "} Facebook */}
                <FacebookLogin
  appId="1596521782190872"
  style={{
    widht:"100%",
    backgroundColor: '#4267b2',
    color: '#fff',
    fontSize: '16px',
    padding: '12px 24px',
    border: 'none',
    cursor:'pointer',
    borderRadius: '4px',
  }}
  onSuccess={(response) => {
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    console.log('Get Profile Success!', response);
  }}
/>
            
            
            </div>
       
        </form>
    </div>
  )
}

export default Login