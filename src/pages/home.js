import React from 'react'
import Navbar from '../components/navbar'
import Stories from '../components/stories'
import Upload_card from '../components/upload_card'
import '../css/stories.css'
export default function Home() {
  return (
    <>
    <Navbar />
    <Stories/>   
    <Upload_card />
    </>
  )
}
