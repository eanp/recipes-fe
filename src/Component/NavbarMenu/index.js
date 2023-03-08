import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarMenu() {
  return (
    <div>
        <li>
        <Link to={'/'}>home</Link>
        </li>
        <li>
        <Link to={'/add'}>add</Link>
        </li>
        <li>
        <Link to={'/profile'}>profile</Link>
        </li>
    </div>
  )
}
