import express from 'express'

import { login,register,getMe, logout, sellerLoginRequest, getSellerData, updateSellerStatus } from '../controllers/user.controller.js'
import isLoggedIn from '@a1code/common-auth/middleware/auth.middleware.js'
import authorize from '@a1code/common-auth/middleware/role.middleware.js'
const router = express.Router()
router.post('/login',login)
router.post('/register',register)
router.get('/me',isLoggedIn,getMe)
router.post('/logout',logout)
router.post('/seller-login',sellerLoginRequest)
router.get('/seller',isLoggedIn,authorize('admin'),getSellerData)
router.post('/seller-update',isLoggedIn,authorize('admin'),updateSellerStatus)

export default router