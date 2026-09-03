
import projects from "../../data/projectData";
import Image from "next/image";
import { Calendar1Icon, DownloadIcon, MessageCircle, User2Icon } from "lucide-react";
import CommentCard from "../../../Components/CommentCard";
import Form from "../../../Components/Form";
import { assets } from "../../../Assets/assests";
import Slider from '../../../Components/seller/Slider'
import Data from "../../../Components/Data";
import SingleProject from "../../../Components/SingleProject";
// import { useEffect, useState } from "react";

// import api from "../../lib/axios";
export default async function ProjectData({ params }) {
  // const [projects,setProjects] = useState([])
  const { id } = await params;

  // const project = projects.find((i) => i.id === Number(id));
  // if (!project) {
  //   return <h1 className="text-center text-red-700 text-4xl">Blog Not Found</h1>;
  // }


  return (
//     <>
//     <div className="flex w-full items-center justify-center bg-blue-500 p-5">
//             <h1 className="text-2xl text-white">
//               <Image
//                 src={assets.logo}
//                 className="h-10 w-auto max-w-full"
//                 alt="logo"
//               />
//             </h1>
//           </div>
//       <div className="lg:p-7 sm:p-2">
//         <div className="bg-white p-4 mx-auto lg:w-3/4 min-h-screen sm:w-full">
//           <h1 className="text-blue-500 text-xl font-bold">
//             {project.name} ({project.category})
//           </h1>

//           <div className="flex items-center mt-3">
//             <User2Icon
//               size={18}
//               className="text-blue-500 hover:text-blue-600"
//             />
//             <p className="text-slate-600 ml-1">{project.seller}</p>
//             <Calendar1Icon size={18} className="text-blue-500 ml-3" />
//             <p className="text-slate-600 ml-1">{project.date}</p>
//           </div>
//           <div className="flex justify-center items-center mt-4 ">
//             {/* <Image
//               src={project.image}
//               alt="projct image preview"
//               className="lg:w-130 lg:h-90 object-cover"
//             /> */}
//             <Slider images={project.setImages} />
//           </div>
//           <p className="text-md text-slate-600 mt-3">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
//             officiis illo velit totam. Tempore corrupti, reprehenderit mollitia
//             veniam animi deleniti corporis ullam impedit labore nesciunt
//             provident. Distinctio tenetur laborum molestiae, mollitia voluptates
//             repellat non debitis accusamus qui quam labore unde!
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias possimus laborum amet perspiciatis pariatur soluta facere numquam minima in autem corporis, dolores tempore nemo aperiam nulla nobis architecto obcaecati vero impedit veritatis dolorem. Nam unde neque ducimus asperiores tempore quidem, voluptatibus doloribus aspernatur vero. Cum iure amet sint quod odit. Numquam consectetur, et optio, in nostrum laboriosam dolorum modi animi unde ut recusandae alias. Corporis sint exercitationem, tenetur id totam delectus deleniti cumque aperiam nulla incidunt unde molestiae reiciendis, magni molestias doloribus asperiores dolores hic, ab repudiandae! Ex suscipit nam, ipsam possimus eius quo libero dignissimos aliquam non totam quod tempore consequatur hic ab quis eveniet rerum autem. Molestias, asperiores nesciunt error, mollitia adipisci distinctio nobis quis similique delectus, obcaecati quaerat. Amet earum distinctio id aperiam temporibus, voluptas iusto corrupti nam, aspernatur cumque cupiditate? Reprehenderit, nam neque ab quaerat excepturi natus aperiam nobis, sequi, voluptas ea voluptatibus? Saepe libero corporis placeat optio illo id aliquid voluptatum provident inventore velit temporibus ut neque fuga, sequi asperiores magnam, explicabo quis ipsum blanditiis odit sapiente? Ratione excepturi, temporibus ab, tenetur officia alias neque odio ducimus tempore cumque modi id quaerat aliquam! Ea culpa ullam architecto tempora rem dolore hic quasi minima non sapiente dignissimos impedit, dolor harum? Libero hic rerum officia temporibus maiores porro. Ipsam, dolor consequuntur commodi neque nihil accusamus incidunt ratione eos nisi laudantium! Illum provident deleniti, magnam, rerum molestias pariatur dolorum recusandae maiores nesciunt natus excepturi incidunt. Et praesentium modi odio labore, voluptas sunt ut optio adipisci mollitia nostrum qui quaerat dolorum cupiditate velit ad tenetur soluta libero eligendi quos delectus esse vitae sequi numquam nisi? Sit quidem ratione maiores praesentium saepe eum nihil alias rem, neque delectus mollitia vitae porro tempora cupiditate dolor sed perferendis, cumque deserunt natus repellat similique quaerat dolores. Perspiciatis eum harum voluptas! Reprehenderit quas maxime consequatur, iste commodi laboriosam sit quae veniam natus asperiores sapiente dolor non ut! Architecto maiores laboriosam cumque voluptatum assumenda deserunt ab dicta molestiae commodi cupiditate, accusantium voluptate? Inventore, dolorum velit. Illum ut enim rerum quisquam aperiam pariatur deserunt recusandae quae beatae, unde nobis aspernatur sint quibusdam. Totam velit voluptate necessitatibus impedit expedita sit praesentium, vero voluptatibus commodi ex eos nesciunt rem dignissimos natus magnam debitis aliquid deserunt doloremque minus fugit molestias ab itaque aliquam! Facere, a. Ut exercitationem, id nostrum labore vitae nesciunt quis possimus voluptate architecto sed quidem. Debitis beatae libero veniam molestiae tempora ut itaque voluptas deserunt quia?
//             {project.full_dis}
//           </p>
// <div className="mt-7">
          
//           <div className="flex justify-end mt-2 mb-2">
//           <Data price={project.price} />
//           </div>
//           </div>
          
//         </div>


// {/* <div className=" m-3 flex justify-center items-center gap-4 ">
//             <span className="font-bold  shadow-md text-md p-3 rounded-md">
//               {project.price}
//             </span>
//             <button className="text-white bg-blue-600 p-3 hover:bg-blue-800 rounded-md">
//               <div className="flex gap-2">
//               <DownloadIcon /><p className="">200</p>
//               </div>
//             </button>
//              <button className="text-white bg-blue-600 p-3 hover:bg-blue-800 rounded-md">
//               <div className="flex gap-2">
//               <MessageCircle /><p className="">200</p>
//               </div>
//             </button>
//             <button className="text-white bg-blue-600 p-3 hover:bg-blue-800 rounded-md">
//               Buy Now
//             </button>
//           </div> */}

          


//         <div className="">
//           <Form />
//         </div>
//       </div>

      
//     </>

<>
<SingleProject id={id} />
</>
  );
}



