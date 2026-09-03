"use client";
import { Dock, Edit2, Trash2, User2Icon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Tiptap from "./Tiptap";
import { useForm } from "react-hook-form";
import { getSettingsAssetUrl, useUserContext } from "@/context/UserContext";
import api from "../../app/lib/axios";
import { useSnackbar } from "notistack";

const Category = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [sellerData,setSellerData] = useState([])
  const { user, setUser } = useUserContext();
  const handleModal = () => {
    setShowProjectModal(!showProjectModal);
  };

  // const sellerData = [
  //   {
  //     id: "1",
  //     full_name: "Arav Thakur",
  //     username: "aravthakur",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "2",
  //     full_name: "Riya Sharma",
  //     username: "riyasharma",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "3",
  //     full_name: "Karan Patel",
  //     username: "karanpatel",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "4",
  //     full_name: "Neha Singh",
  //     username: "nehasingh",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "5",
  //     full_name: "Mira Joshi",
  //     username: "mirajoshi",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "6",
  //     full_name: "Vikram Saini",
  //     username: "vikramsaini",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "7",
  //     full_name: "Anjali Rao",
  //     username: "anjalirao",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "8",
  //     full_name: "Sahil Verma",
  //     username: "sahilverma",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "9",
  //     full_name: "Pooja Mehta",
  //     username: "poojamehta",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "10",
  //     full_name: "Amit Dubey",
  //     username: "amitdubey",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "11",
  //     full_name: "Tara Gupta",
  //     username: "taragupta",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  //   {
  //     id: "12",
  //     full_name: "Nikhil Sharma",
  //     username: "nikhilsharma",
  //     role: "seller",
  //     category: "Ecommerce",
  //     date: "23-3-45",
  //   },
  // ];

  const rowsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [contentText, setContentText] = useState("");
  const [finalFormData, setFinalFormData] = useState(null);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();
  const{enqueueSnackbar,closeSnackbar}= useSnackbar()
  const onSubmit = async (data) => {
    const combinedData = {
      ...data,
      full_name: user.full_name,
      username: user.username,
      role: user.role,
    };

    setFinalFormData(combinedData);
    try {
      console.log(combinedData);
      const response = await api.post(
        "/category/api/v1/categoryRouter/category",
        combinedData,
      );
      { enqueueSnackbar(response.data.message,{variant:"success"})}
      setShowProjectModal(false)
      
    } catch (error) {
      { enqueueSnackbar(error.message,{variant:"error"})}
    }
  };

   const handleLoadData = async()=>{
      try {
         const response = await api.get('/category/api/v1/categoryRouter/getCategory')
         console.log(response.data)
         setSellerData(response.data)
         
      } catch (error) {
        console.log(error.message)
      }
     
      
  
    }
  
    useEffect(()=>{
      
      handleLoadData()
     
    },[sellerData])

  // useEffect(()=>{
  //   if(user){
  //     console.log(user)
  //   }else{
  //     console.log("No login found")
  //   }
  // },[user])
  return (
    <div className="space-y-4 p-4 sm:p-6">
      <div className="flex flex-col gap-3   p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Dock size={35} className="text-blue-500" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              {showProjectModal ? "Create category" : "Category Details"}
            </h1>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center  bg-blue-600 px-4 py-2 text-xl font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          onClick={handleModal}
        >
          Create New Category
        </button>
      </div>
      {showProjectModal ? (
        <div className="border border-gray-200 bg-white shadow-sm">
          <div className="">
            <form action="" className="p-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="mb-3 text-lg text-zinc-800">
                  Enter Your Category Name
                </label>
                <input
                  type="text"
                  className="w-full mt-3 p-2 border border-slate-300 border-l-6 rounded-md"
                  {...register("category", {
                    required: "category Name is required",
                  })}
                />
                {errors.category && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="mb-3 ">
                <label className="mb-3 text-lg text-zinc-800">
                  Enter Your Category Date
                </label>
                <input
                  type="date"
                  className="w-full mt-3 p-2 border border-slate-300 border-l-6 rounded-md"
                  {...register("date", {
                    required: " Date is required",
                  })}
                />
                {errors.date && (
                  <p className="text-red-500 mt-2 text-sm">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div className="p-2 flex flex-row gap-2">
                <button
                  className="p-2 w-1/2 text-lg cursor-pointer rounded-md bg-blue-600 hover:bg-blue-800 text-white"
                  type="submit"
                >
                  Add Project
                </button>
                <button
                  type="button"
                  className="p-2 w-1/2 cursor-pointer text-lg rounded-md bg-slate-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="space-y-4">
            <div className="sm:hidden space-y-3">
              {sellerData.map((seller) => (
                <div
                  key={seller._id}
                  className=" border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-zinc-800">{seller.username}</p>
                    </div>
                    <div className="flex gap-2 text-slate-700">
                      <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between gap-2">
                      <span className="font-medium text-slate-800">
                        Project Name
                      </span>
                      <span>{seller.full_name}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="font-medium text-slate-800">Role</span>
                      <span className="capitalize">{seller.role}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="font-medium text-slate-800">
                        Categroy
                      </span>
                      <span className="capitalize">{seller.category}</span>
                    </div>
                    <span className="">
                      <span className="font-medium text-slate-800">Date: </span>{" "}
                      {seller.date}
                    </span>
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
                      PROJECT NAME
                    </th>
                    <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                      USERNAME
                    </th>
                    <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                      Role
                    </th>

                    <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                      CATEGORY
                    </th>
                    <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                      DATE
                    </th>
                    <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                      Edit
                    </th>
                    <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sellerData.map((seller) => (
                    <tr key={seller._id} className="hover:bg-slate-50">
                      <td className="px-4 py-4 text-lg text-slate-700">
                        {seller._id}
                      </td>
                      <td className="px-4 py-4 text-lg text-slate-700">
                        {seller.full_name}
                      </td>
                      <td className="px-4 py-4 text-lg text-slate-700">
                        {seller.username}
                      </td>
                      <td className="px-4 py-4 text-lg capitalize text-slate-700">
                        {seller.role}
                      </td>
                      <td className="px-4 py-4 text-center text-slate-700">
                        {seller.category}
                      </td>
                      <td className="px-4 py-4 text-center text-slate-700">
                        {seller.date}
                      </td>
                      <td className="px-4 py-4 text-center text-slate-700">
                        {" "}
                        <button
                          type="button"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition hover:bg-slate-100"
                        >
                          <Edit2 size={18} />
                        </button>
                      </td>
                      <td className="px-4 py-4 text-center text-slate-700">
                        <button
                          type="button"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-red-500 transition hover:bg-red-50"
                        >
                          <Trash2 size={18} />
                        </button>
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
      )}
    </div>
  );
};

export default Category;
