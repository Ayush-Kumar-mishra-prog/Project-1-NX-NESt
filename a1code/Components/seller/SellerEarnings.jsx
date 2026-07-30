"use client";

import { Edit2, IndianRupee, Trash2, User2Icon } from "lucide-react";
import React, { useMemo, useState } from "react";

const SellerEarnings = () => {
     const sellerData = [
    {
      id: "1",
      project: "Arav Thakur",
      seller: "aravthakur",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "2",
      project: "Riya Sharma",
      seller: "riyasharma",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "3",
      project: "Karan Patel",
      seller: "karanpatel",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    { id: "4", project: "Neha Singh", seller: "nehasingh", role: "seller", earn:2004, category:"Web Development" },
    { id: "5", project: "Mira Joshi", seller: "mirajoshi", role: "seller", earn:2004, category:"Web Development" },
    {
      id: "6",
      project: "Vikram Saini",
      seller: "vikramsaini",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    { id: "7", project: "Anjali Rao", seller: "anjalirao", role: "seller", earn:2004, category:"Web Development" },
    {
      id: "8",
      project: "Sahil Verma",
      seller: "sahilverma",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "9",
      project: "Pooja Mehta",
      seller: "poojamehta",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "10",
      project: "Amit Dubey",
      seller: "amitdubey",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "11",
      project: "Tara Gupta",
      seller: "taragupta",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
    {
      id: "12",
      project: "Nikhil Sharma",
      seller: "nikhilsharma",
      role: "seller",
      earn:2004,
      category:"Web Development"
    },
  ];
      const rowsPerPage = 6;
      const [currentPage, setCurrentPage] = useState(1);
      const pageCount = Math.max(1, Math.ceil(sellerData.length / rowsPerPage));
    
      const currentRows = useMemo(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        return sellerData.slice(startIndex, startIndex + rowsPerPage);
      }, [currentPage]);
    
      const handlePageChange = (page) => {
        if (page >= 1 && page <= pageCount) {
          setCurrentPage(page);
        }
      };
  return (
   <div className="space-y-4 p-4 sm:p-6">
         <div className="flex flex-col gap-3   p-4 sm:flex-row sm:items-center sm:justify-between">
           <div className="flex items-center gap-1">
             <IndianRupee size={35} className="text-blue-500" />
             <div>
               <h1 className="text-4xl font-bold text-slate-900">
                 Earning Details
               </h1>
               
               
             </div>
           </div>
          
         </div>
         
   
         <div className="space-y-4">
           <div className="sm:hidden space-y-3">
             {currentRows.map((seller) => (
               <div
                 key={seller.id}
                 className=" border border-gray-200 bg-white p-4 shadow-sm"
               >
                 <div className="flex items-center justify-between gap-3">
                   <div>
                     
                     <p className="text-sm text-zinc-800">{seller.seller}</p>
                   </div>
                   <div className="flex gap-2 text-slate-700">
                        
                    <p className="text-sm text-zinc-800">{seller.category}</p>
                   </div>
                 </div>
                 <div className="mt-4 space-y-2 text-sm text-slate-600">
                   <div className="flex justify-between gap-2">
                     <span className="font-medium text-slate-800">Full Name</span>
                     <span>{seller.project}</span>
                   </div>
                   <div className="flex justify-between gap-2">
                     <span className="font-medium text-slate-800">Role</span>
                     <span className="capitalize">{seller.role}</span>
                   </div>
                   <div className="flex justify-between gap-2">
                     <span className="font-medium text-slate-800">Earning</span>
                     <span className="capitalize">{seller.earn}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
   
           <div className="hidden overflow-x-auto  border border-gray-200 bg-white shadow-sm sm:block">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-blue-900 text-white">
                 <tr>
                   <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                     SR.NO
                   </th>
                   <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                     Project Name
                   </th>
                   <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                     Seller
                   </th>
                   <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                     Role
                   </th>
                   <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                     Earning
                   </th>
                    <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                     Category
                   </th>
                   
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {currentRows.map((seller) => (
                   <tr key={seller.id} className="hover:bg-slate-50">
                     <td className="px-4 py-4 text-lg text-slate-700">
                       {seller.id}
                     </td>
                     <td className="px-4 py-4 text-lg text-slate-700">
                       {seller.project}
                     </td>
                     <td className="px-4 py-4 text-lg text-slate-700">
                       {seller.seller}
                     </td>
                     <td className="px-4 py-4 text-lg capitalize text-slate-700">
                       {seller.role}
                     </td>
                     <td className="px-4 py-4  text-center text-slate-700">
                        <div className="flex items-center justify-center">
                        <IndianRupee size={15} />
                       <p className="text-sm text-zinc-800">{seller.earn}</p>
                       </div>
                     </td>
                     <td className="px-4 py-4 text-center text-slate-700">
                        
                        <p className="text-sm text-zinc-800">{seller.category}</p>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
   
         <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
           <p className="text-sm text-slate-600">
             Page {currentPage} of {pageCount}
           </p>
           <nav className="flex flex-wrap items-center justify-center gap-2">
             <button
               type="button"
               onClick={() => handlePageChange(currentPage - 1)}
               disabled={currentPage === 1}
               className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
             >
               Previous
             </button>
   
             {Array.from({ length: pageCount }, (_, index) => {
               const page = index + 1;
               return (
                 <button
                   key={page}
                   type="button"
                   onClick={() => handlePageChange(page)}
                   className={`inline-flex h-10 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
                     page === currentPage
                       ? "bg-blue-600 text-white"
                       : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                   }`}
                 >
                   {page}
                 </button>
               );
             })}
   
             <button
               type="button"
               onClick={() => handlePageChange(currentPage + 1)}
               disabled={currentPage === pageCount}
               className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
             >
               Next
             </button>
           </nav>
         </div>
       </div>
  )
}

export default SellerEarnings