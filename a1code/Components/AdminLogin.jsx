"use client"
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import api from '../app/lib/axios'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/navigation';
import { useUserContext } from '../context/UserContext'




const AdminLogin = () => {
  const {setUser,user} = useUserContext()
  const router = useRouter()
  const{enqueueSnackbar,closeSnackbar}= useSnackbar()
   const {register,handleSubmit,formState:{errors},reset} = useForm()
    const onSubmit = async (data)=>{
     const formData ={
      ...data,
      role:"admin"
     }
     try{
        const response = await api.post(`/auth/api/v1/auth/login`,formData)
        const responseUser = await api.get("/auth/api/v1/auth/me");
      console.log(response)
          
      setUser(responseUser.data)
      { enqueueSnackbar("You logged in successfully",{variant:"success"})}
      router.push('/')
      
     }catch(error){
{ enqueueSnackbar(error.message,{variant:"error"})}
     }
    }
  return (
     <div className="p-8  bg-white w-100">
        <h1 className="text-center font-bold text-2xl">ADMIN LOGIN</h1>
        
        <form action="" className="mt-3"  onSubmit={handleSubmit(onSubmit)}>
            
            <input type="email" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your email id' {...register("email")} />
            
            <input type="password" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='********' {...register("password")} />

           
         
            <div className="flex justify-center items-center mt-4">
           
            <Button fullWidth variant='contained'  type='submit'>
               Login Now
            </Button>
            </div>
            
        </form>
    </div>
  )
}

export default AdminLogin