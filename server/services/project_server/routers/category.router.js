import express from 'express'
import {} from '@a1code/common-auth'
import { createCategory, getCategroy } from '../controllers/category.controller.js'
import isLoggedIn from '@a1code/common-auth/middleware/auth.middleware.js'
import authorize from '@a1code/common-auth/middleware/role.middleware.js'
const catRouter = express.Router()
catRouter.post('/category',isLoggedIn,authorize('admin','seller'),createCategory)
catRouter.get('/getCategory',isLoggedIn,authorize('admin','seller'),getCategroy)

export default catRouter