import React from 'react'
import NavbarMenu from '../../Component/NavbarMenu'

export default function Home() {
  return (
    <div>
        <NavbarMenu />
        <h1>Home</h1>
        <button className='btn btn-primary py-5' style={{paddingLeft:'20px',paddingRight:'20px',backgroundColor:'skyblue'}}>detail</button>
    </div>
  )
}
