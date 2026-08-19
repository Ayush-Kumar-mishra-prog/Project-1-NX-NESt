"use client"
import { Button } from '@mui/material'
import { MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import { useComment } from '../context/ReplyCommentContext'

const Data = ({price}) => {
  const {loggedIn} = useComment()
  const handleCheckLogin = ()=>{
    if(!loggedIn){
      alert("Please login to purchase the project")
    }else{
      alert("Redirect to payment page")
    }
  }
  return (
    <>
    <div className="flex  gap-2 justify-center ">
    <Button variant='contained'>{price}</Button>
    <Button variant='contained'>200</Button>
    <Button variant='contained'>
        <MessageCircle /> 100
    </Button>
    <Button onClick={handleCheckLogin} variant='contained'>Buy Now</Button>
    </div>
    </>
  )
}

export default Data