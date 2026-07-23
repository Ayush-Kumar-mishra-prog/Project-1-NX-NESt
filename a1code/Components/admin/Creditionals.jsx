"use client";
import { Dock, Edit2, EyeIcon, MessageCircle, Trash2, User2Icon } from "lucide-react";
import { useMemo, useState } from "react";

const Creditionals = () => {
  const sellerData = [
    {
      id: "1",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "2",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "3",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "4",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "5",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "6",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "7",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "8",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "9",
      seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "10",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "11",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
    },
    {
      id: "12",
     seller: "Arav Thakur",
      name: "aravthakur",
      date: "20-12-2026",
      password: "ayush123",
      email:
        "ayushrajmishra960@gmail.com",
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
        <div className="flex items-center gap-3">
          <EyeIcon size={35} className="text-blue-500" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
            Creditionals Management
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
                   Username
                  </span>
                  <span>{seller.name}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="font-medium text-slate-800">Date</span>
                  <span className="capitalize">{seller.date}</span>
                </div>

                <span className="">
                  <span className="font-medium text-slate-800">Email: </span>{" "}
                  {seller.email}
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
                  SELLER NAME
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                  USERNAME
                </th>
                <th className="px-4 py-3 text-left text-lg font-semibold uppercase tracking-wide">
                  Date
                </th>

              
                <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                  EMAIL
                </th>

                <th className="px-4 py-3 text-center text-lg font-semibold uppercase tracking-wide">
                  Delete
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
                    {seller.seller}
                  </td>
                  <td className="px-4 py-4 text-lg text-slate-700">
                    {seller.name}
                  </td>
                  <td className="px-4 py-4 text-lg capitalize text-slate-700">
                    {seller.date}
                  </td>
                  
                  <td className="px-4 py-4 text-center text-slate-700">
                    {seller.email}
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
  );
};

export default Creditionals;
