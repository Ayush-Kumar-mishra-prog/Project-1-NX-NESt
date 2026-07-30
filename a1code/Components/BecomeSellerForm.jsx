"use client"

const BecomeSellerForm = () => {
  return (
    <div className="p-8  bg-white w-100">
        
        
        <form action="" className="mt-3">
            <h1 className="text-center font-bold lg:text-2xl sm:text-xl">Seller form</h1>
            
            <input type="text" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your full name' />

             <input type="text" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter your username' />

              <input type="date" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Enter today date' />
            
            <input type="email" className="w-full mt-3 border border-gray-400 border-l-3 rounded-md text-sm p-3 pb-3" placeholder='enter your email' />

             <input type="password" className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='password ********' />

              <textarea className="w-full text-sm p-3 mt-3 pb-3 border border-gray-400 rounded-md border-l-3" placeholder='Write the discription about your profile' />

              <p className="text-base text-slate-400">Once the admin approve your request you can easily sign in in the application from login page using your seller email id and password</p>
         
            <div className="flex justify-center items-center mt-4">
            <button className="px-5 py-3 text-white w-full bg-blue-500">
                Send Request
            </button>
            </div>
            
        </form>
    </div>
  )
}

export default BecomeSellerForm