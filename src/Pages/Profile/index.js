import {useEffect} from 'react'
import NavbarMenu from '../../Component/NavbarMenu'
import { useSelector } from 'react-redux'

export default function Profile() {
   const user = useSelector((state)=>state.user.data)
   
   useEffect(()=>{
     console.log(user)
   },[user])
  return (
    <div>
        <NavbarMenu />
        <div className="container">
            <ul className="li"> {user.id}</ul>
            <ul className="li">   {user.fullname}</ul>
            <ul className="li"> {user.email}</ul>
            <ul className="li"> {user.token}</ul>
            <ul className="li"> {user.photo}</ul>
        </div>
      </div>
  )
}
