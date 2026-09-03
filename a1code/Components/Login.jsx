"use client"
import { Button, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FcGoogle } from 'react-icons/fc'
import { FaEye, FaEyeSlash, FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useComment } from '../context/ReplyCommentContext'
import { useUserContext } from '../context/UserContext'
import { useForm } from 'react-hook-form'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation';
import api from '../app/lib/axios';
import { useSnackbar } from 'notistack'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Login = () => {
    const [mode,setMode] = useState("login")

    const currencies = [
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'seller',
    label: 'Seller',
  },
  
];

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
    let response;

    try{
        console.log(data)
      response = await api.post(`/auth/api/v1/auth/${mode}`,data)
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
 const [showPassword, setShowPassword] = React.useState(false);
 const outlinedPasswordId = React.useId();
 
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-8  bg-white  w-100 bg[url-('/1.jpg')] ">
        <h1 className="text-center font-bold text-2xl">
        {
            mode==="login" ?"Welcome Back":"Register Your Account"}</h1>
        
        <form action="" className="mt-3" onSubmit={handleSubmit(onSubmit)}>
            
            {/* <input type="email" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-5" placeholder='Enter your email id' {...register("email")} /> */}

<FormControl sx={{ marginTop:"10px"  }} variant="outlined" className='w-full mt-3'>
          <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Email</InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`} {...register("email")}
            type='email'
            
            label="Email"
          /></FormControl>

            
            {/* <input type="password" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='********' {...register("password")}  /> */}


<FormControl sx={{ marginTop:"10px"  }} variant="outlined" className='w-full mt-3'>
          <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Password</InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`} {...register("password")}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /></FormControl>



             {/* <select name="category" id="" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" {...register("role")} >
               <option value="">Select role</option>
              <option value="user" className="w-full p-2 border border-slate-300 border-l-6 rounded-md">user</option>
              <option value="seller" className="w-full p-2 border border-slate-300 border-l-6 rounded-md">seller</option>
             
            </select> */}

             {
                    mode ==="login" &&
                     <TextField
          id="outlined-select-currency"
          select
          label="Select Role"
          defaultValue="user"
          helperText="Please select your role" className='w-full m-3' sx={{marginTop:'15px'}}
          {...register("role")}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                    
                }

           
            {
                mode ==="register" && (
                    <>
                    
            {/* <input type="text" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='Enter your username' {...register("username")}  /> */}


<FormControl sx={{ marginTop:"10px"  }} variant="outlined" className='w-full mt-3'>
          <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Username</InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`} {...register("username")}
            type='text'
            
            label="Username"
          /></FormControl>

     







            {/* <input type="text" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='Enter your full name' {...register("full_name")}  /> */}

<FormControl sx={{ marginTop:"10px"  }} variant="outlined" className='w-full mt-3'>
          <InputLabel htmlFor={`${outlinedPasswordId}-input`}>Full Name</InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`} {...register("full_name")}
            type='text'
            
            label="Full Name"
          /></FormControl>

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
                <FcGoogle  className="mr-12" size={25} /> {" "}Login With Google
            </Button>
     
     

             </div>
            <div  className="mt-2 w-full bg-white border border-[#4267B2] rounded-md flex justify-center items-center">
           
                {/* <FaFacebook className="mr-2" size={25} /> {" "} Facebook */}
                <FaFacebook className=" text-blue-500" size={25} />
                <FacebookLogin
  appId="1596521782190872"
  style={{
    widht:"100%",
    backgroundColor: 'white',
    color: '#4267B2',
    fontSize: '16px',
    padding: '7px 20px',
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