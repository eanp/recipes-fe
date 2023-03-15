import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavbarMenu from '../../../Component/NavbarMenu'
import { loginUser } from '../../../Storages/Actions/auth'

export default function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postData = (e) =>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        let data = {
            email, password
        }
        dispatch(loginUser(data,navigate))
    }

    return(
        <div>
             <NavbarMenu />
            <form onSubmit={postData}>
                <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                <button type='submit' className='btn btn-warning'>Login</button>
            </form>
        </div>
    )
}