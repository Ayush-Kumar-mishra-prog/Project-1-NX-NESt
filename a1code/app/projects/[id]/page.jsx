import projects from "../../data/projectData";
import Image from "next/image";
import { Calendar1Icon, User2Icon } from "lucide-react";
import CommentCard from "../../../Components/CommentCard";
import Form from "../../../Components/Form";
import { assets } from "../../../Assets/assests";
export default async function ProjectData({ params }) {
  const { id } = await params;
  const project = projects.find((i) => i.id === Number(id));
  if (!project) {
    return <h1 className="text-center text-red text-4xl">Blog Not Found</h1>;
  }

  return (
    <>
    <div className="flex w-full items-center justify-center bg-blue-500 p-5">
            <h1 className="text-2xl text-white">
              <Image
                src={assets.logo}
                className="h-10 w-auto max-w-full"
                alt="logo"
              />
            </h1>
          </div>
      <div className="lg:p-7 sm:p-2">
        <div className="bg-white p-4 mx-auto lg:w-3/4 min-h-screen sm:w-full">
          <h1 className="text-blue-500 text-xl font-bold">
            {project.name} ({project.category})
          </h1>

          <div className="flex items-center mt-3">
            <User2Icon
              size={18}
              className="text-blue-500 hover:text-blue-600"
            />
            <p className="text-slate-600 ml-1">{project.seller}</p>
            <Calendar1Icon size={18} className="text-blue-500 ml-3" />
            <p className="text-slate-600 ml-1">{project.date}</p>
          </div>
          <div className="flex justify-center items-center mt-4 ">
            <Image
              src={project.image}
              alt="projct image preview"
              className="lg:w-130 lg:h-90 object-cover"
            />
          </div>
          <p className="text-md text-slate-600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            officiis illo velit totam. Tempore corrupti, reprehenderit mollitia
            veniam animi deleniti corporis ullam impedit labore nesciunt
            provident. Distinctio tenetur laborum molestiae, mollitia voluptates
            repellat non debitis accusamus qui quam labore unde!
            {project.full_dis}
          </p>
          <div className="float-right gap-4 flex mt-2 ">
            <span className="font-bold  shadow-md text-md p-3 rounded-md">
              {project.price}
            </span>
            <button className="text-white bg-blue-600 p-3 hover:bg-blue-800 rounded-md">
              Buy Now
            </button>
          </div>
        </div>

        <div className="">
          <Form />
        </div>
      </div>
    </>
  );
}
