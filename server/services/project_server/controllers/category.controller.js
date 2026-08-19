import Category from "../models/category.modal.js";

export const createCategory = async(req,res)=>{
    const{full_name,username,role,category,date} = req.body;
    try {
        
        if(!full_name || ! username || ! role || !category){
            return res.status(400).json({message:"All fields are required"})
        }
        const exist = await Category.find({category})
        if(!exist){
            const createdCategory = await Category.create({
                full_name:full_name,
                username:username,
                role:role,
                category:category,
                date:date
            })

            return res.status(201).json({message:createCategory})
        }else{
            return res.status(400).json({message:"Category already exist"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error",error})
    }
}