"use client"
import { Button, ButtonGroup } from '@mui/material'
import { MessageCircle,IndianRupee, DownloadIcon } from 'lucide-react'
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
    
    <ButtonGroup variant="contained" aria-label="Basic button group">
  <Button><IndianRupee size={16} />{price}</Button>
  <Button> <DownloadIcon size={16} />  200</Button>
  <Button><MessageCircle size={16} /> 100</Button>
</ButtonGroup>
    </div>
    </>
  )
}

export default Data