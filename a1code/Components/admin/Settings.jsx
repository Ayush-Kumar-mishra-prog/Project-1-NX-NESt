"use client";

const Settings = () => {
  return (
    <>
      <div className="space-y-4  lg:w-1/2 sm:w-full ">
        <div className="flex flex-col gap-3    sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-4xl p-4 font-bold text-slate-900">
                Settings
              </h1>
            </div>
          </div>
        </div>
        <div className=" gap-3   bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4 md:mb-8 text-sm">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Website Title</label>
              <input
                type="text"
                className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload logo</label>
              <input
                type="file"
                placeholder="Upload logo"
                className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
              />
            </div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4 md:mb-8 text-sm">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700"> Update Top logo navbar color</label>
              <input
                type="color" defaultValue="blue"
               className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload Navbar color</label>
               <input
                type="color" defaultValue="blue"
               className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700"> Update Navbar text color</label>
              <input
                type="color" defaultValue="white"
               className="rounded-full"
              />
            </div>
             <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload footer color</label>
               <input
                type="color" defaultValue="blue"
               className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700"> Update footer text color</label>
              <input
                type="color" defaultValue="blue"
               className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 md:mb-8 text-sm">
            <label className="text-zinc-700">Website Footer</label>
            <input
              type="text"
              className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
            />
          </div>

          

          <button className=" bg-blue-400 text-white hover:bg-blue-600 text-lg  rounded-md font-bold p-2  transition-colors cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
