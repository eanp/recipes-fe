import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap'

export default function NavbarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Link to={'/'}>home</Link>
            <Link to={'/add'}>add</Link>
            <Link to={'/profile'}>profile</Link>
        </Container>
    </Navbar>
  )
}
