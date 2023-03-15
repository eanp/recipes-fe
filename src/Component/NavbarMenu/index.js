import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function NavbarMenu() {
  // const user = useSelector((state)=>state.user.data)
  const name = localStorage.getItem("name")
  const navigate = useNavigate()
  
  // useEffect(()=>{
  //   console.log(user)
  // },[user])

  const logout = () => {
    localStorage.clear()
    window.location.reload(false)
    navigate('/login')
  }

  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Link to={'/'}>home</Link>
            <Link to={'/add'}>add</Link>
            <Link to={'/profile'}>{name ?name : "profile"}</Link>
            {name && <button onClick={()=>logout()}>logout</button>}
            {/* <p>{token}</p> */}
        </Container>
    </Navbar>
  )
}
