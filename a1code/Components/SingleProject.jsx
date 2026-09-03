"use client";

import { useEffect, useState } from "react";
import api from "../app/lib/axios";
import { Calendar1Icon, User2Icon } from "lucide-react";
import Data from "./Data";
import Form from "./Form";
import Slider from "./seller/Slider";

const SingleProject = ({ id }) => {
  const [projects, setProjects] = useState([]);

  const handleLoadProject = async () => {
    try {
      const response = await api.get("/category/api/v1/project/projects");
      setProjects(response.data.data || []);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    handleLoadProject();
  }, []);

  const project = projects.find((i) => i._id === id);
  if (!project) {
    return null;
  }

  return (
    <>
      <div className="flex w-full items-center justify-center bg-blue-500 p-5">
        <h1 className="text-2xl text-white">Overview of the project</h1>
      </div>

      <div className="lg:p-7 sm:p-2">
        <div className="bg-white p-4 mx-auto lg:w-3/4 min-h-screen sm:w-full">
          <h1 className="text-blue-500 text-xl font-bold">
            {project.name} ({project.category})
            <hr className="border-t border-blue-500 mt-1" />
          </h1>
       

        <div className="flex items-center mt-3">
          <User2Icon size={18} className="text-blue-500 hover:text-blue-600" />
          <p className="text-slate-600 ml-1">{project.seller || "Not avaliable yet"}</p>
          <Calendar1Icon size={18} className="text-blue-500 ml-3" />
          <p className="text-slate-600 ml-1">{project.date}</p>
        </div>
        <div className="flex justify-center items-center mt-4 ">
          <Slider images={project.project_image} />
        </div>
        <p className="text-md text-slate-600 mt-3">
          
          {project.brief_description || "No description available yet"}
        </p>
        <div className="mt-7">
          <div className="flex justify-end mt-2 mb-2">
            <Data price={project.price} />
          </div>
        </div>
      </div>

       </div>

      <div className="">
        <Form />
      </div>
    </>
  );
};

export default SingleProject;
