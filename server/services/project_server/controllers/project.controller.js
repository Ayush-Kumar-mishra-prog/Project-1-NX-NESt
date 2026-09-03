import Project from "../models/project.modal.js";

export const addProject = async(req,res)=>{
    try {
        const{name,date,price,discription,category,project_image,project_file,show_image,brief_description} = req.body;

        const exist = await Project.findOne({name})
        if(!exist){
            const data = await Project.create({name,
                date,
                price,
                discription,
                category,
                project_image: req.files ?.project_image?.[0] ? `/uploads/${req.files ?.project_image?.[0].filename}`:null,
                project_file:req.files ?.project_file?.[0] ? `/uploads/${req.files ?.project_file?.[0].filename}`:null,
                show_image:req.files ?.show_image?.[0] ? `/uploads/${req.files ?.show_image?.[0].filename}`:null,
                brief_description})
            if(data){
                res.status(200).json({message:"Project created successfully",data})
            }
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
    }
}

export const getProject = async(req,res)=>{
    try {
        const data= await Project.find()
        if(data){
            res.status(200).json({data})
        }else{
            res.status(401).json({message:"No project found"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
    }
}

export const deleteProject = async(req,res)=>{
    try{
        console.log("controller started")
const {id}= req.body;
console.log("id loaded",id)
const data = await Project.findByIdAndDelete(id)
console.log("query1 completed")
if(!data){
    res.status(404).json({message:"No projects found"})
}
res.status(200).json({message:"Project deleted"})

    }catch(error){
        res.status(500).json({message:"Internal server error",error})
    }
}