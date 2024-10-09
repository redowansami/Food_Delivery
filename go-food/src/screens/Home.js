import React from 'react'
import NavBar from '../components/NavBar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousal/>
      <Body/>
      <Footer/>
    </div>
  )
}
