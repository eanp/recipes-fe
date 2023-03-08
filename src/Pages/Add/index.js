import {useState,useEffect} from 'react'
import axios from 'axios'
import NavbarMenu from '../../Component/NavbarMenu'

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzNzRmYjI5LThlNjAtNDBhYy1hZTQzLWI5ZDc0MmMwMDQzNyIsImVtYWlsIjoiYXZnMDQ3NTlAenNsc3ouY29tIiwiZnVsbG5hbWUiOiJhdmciLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY4NDcyOSIsImNyZWF0ZWRfYXQiOm51bGwsImlhdCI6MTY3ODI2MDQ4MSwiZXhwIjoxNjc5NTc0NDgxfQ.1zXlORBqLqevMo9zQcXkHnfFIeGemm8pAimKF7Z-GYs"
let url = 'https://zealous-erin-cod.cyclic.app/recipes'

export default function Add() {
  const [inputData,setInputData] = useState({
    title:"",ingredients:"",category_id:1
  })
  const [photo,setPhoto] = useState()
  const [alert,setAlert] = useState(false)
  
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title",inputData.title)
    formData.append("ingredients",inputData.ingredients)
    formData.append("category_id",inputData.category_id)
    formData.append("photo",photo)
    console.log(formData)
    axios.post(url,formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    }).then((res)=>{
      console.log("input data success")
      console.log(res)
      setAlert(true)
    }).catch((err)=>{
      console.log("input data fail")
      console.log(err)
    })

  }


  return (
    <div>
        <NavbarMenu />
        <h1>Add Menu</h1>
          <form onSubmit={postForm} className="container">
              <input type="text" value={inputData.title} name="title" placeholder='title' required onChange={handleChange} className="form-control my-5" />
              <input type="text" value={inputData.ingredients} name="ingredients" placeholder='ingredients' required onChange={handleChange} className="form-control" />
              <input type="file" name="photo" placeholder='photo' required onChange={handlePhoto} className="form-control my-5" />
              <button type='submit' className='btn btn-warning'>Submit Menu</button>
          </form>

          <div className="container">

          {  alert && <div className="alert alert-success my-2" role="alert" onClick={()=>setAlert(false)}>
            Input data success
          </div>}

          </div>
    </div>
  )
}
