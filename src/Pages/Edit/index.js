import {useState,useEffect} from 'react'
import axios from 'axios'
import NavbarMenu from '../../Component/NavbarMenu'
import { useParams } from 'react-router-dom'

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzNzRmYjI5LThlNjAtNDBhYy1hZTQzLWI5ZDc0MmMwMDQzNyIsImVtYWlsIjoiYXZnMDQ3NTlAenNsc3ouY29tIiwiZnVsbG5hbWUiOiJhdmciLCJwaG90byI6bnVsbCwidmVyaWYiOjEsIm90cCI6IjY4NDcyOSIsImNyZWF0ZWRfYXQiOm51bGwsImlhdCI6MTY3ODI2MDQ4MSwiZXhwIjoxNjc5NTc0NDgxfQ.1zXlORBqLqevMo9zQcXkHnfFIeGemm8pAimKF7Z-GYs"
let url = 'http://localhost:3000/recipes'

export default function Edit() {
  const { id } = useParams();
  const [inputData,setInputData] = useState({
    title:"",ingredients:"",category_id:1,photo_url:null
  })
  const [photo,setPhoto] = useState()
  const [alert,setAlert] = useState(false)
  const [preview,setPreview] = useState("")

  const getData = () => {
    axios.get(url+"/"+id,{
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    }).then((res)=>{
      console.log(res)
      if(res.data){
        setInputData({
          ...inputData,
          title: res.data.data.title,
          ingredients: res.data.data.ingredients,
          category_id: res.data.data.category_id,
          photo_url:res.data.data.photo
        })
        console.log(inputData)
      }
      setAlert(false)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  
  useEffect(()=>{
    console.log(id)
  },[])
  
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setPreview(objectUrl)
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title",inputData.title)
    formData.append("ingredients",inputData.ingredients)
    formData.append("category_id",inputData.category_id)
    photo && formData.append("photo",photo)
    console.log(formData)
    axios.put(url+"/"+id,formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        "Authorization": token
      }
    }).then((res)=>{
      console.log("update data success")
      console.log(res)
      setAlert(true)
      getData()
    }).catch((err)=>{
      console.log("update data fail")
      console.log(err)
    })

  }


  return (
    <div>
        <NavbarMenu />
        <h1>Edit Menu</h1>
          <form onSubmit={postForm} className="container">
              <input type="text" value={inputData.title} name="title" placeholder='title' onChange={handleChange} className="form-control my-5" />
              <input type="text" value={inputData.ingredients} name="ingredients" placeholder='ingredients' onChange={handleChange} className="form-control" />
              {inputData.photo_url && photo == null &&  <img className='img-thumbnail' src={inputData.photo_url} style={{height:"100px",width:"100px "}} />}
              {inputData.photo_url && preview !== "" &&  <img className='img-thumbnail' src={preview} style={{height:"100px",width:"100px "}} />}
              <input type="file" name="photo" placeholder='photo' onChange={handlePhoto} className="form-control my-5" />
              <button type='submit' className='btn btn-warning'>Submit Menu</button>
          </form>

          <div className="container">

          {  alert && <div className="alert alert-success my-2" role="alert" onClick={()=>setAlert(false)}>
            update data success
          </div>}

          </div>
    </div>
  )
}
