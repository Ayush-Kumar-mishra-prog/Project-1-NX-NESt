import express from 'express'
import { addProject, deleteProject, getProject } from '../controllers/project.controller.js'
import upload from '../middlewares/upload.middleware.js'
const projectRouter = express.Router()
projectRouter.get('/projects',getProject)
projectRouter.post('/add-project',upload.fields([
    {name:"project_image",maxCount:1},
    {name:"project_file",maxCount:1},
    {name:"show_image",maxCount:1}
]),addProject)
projectRouter.post('/del',deleteProject)

export default projectRouter;