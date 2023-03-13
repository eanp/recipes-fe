import {useState,useEffect} from 'react'
import NavbarMenu from '../../Component/NavbarMenu'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

let url = 'http://localhost:3000/recipes'

export default function Home() {
  const [data,setData] = useState()
  const [show, setShow] = useState(false);
  const [selected,setSelected] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  const editRecipes = (id) =>{
    navigate(`/edit/${id}`)
  }

  const confirmDelete = (id) => {
    setSelected(id)
    handleShow()
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  const getData = () => {
    axios.get(url).then((res)=>{
      console.log(res)
      setData(res.data.data)
    }).then((err)=>{
      console.log(err)
    })
  }


  const deleteData = (id) => {
    axios.delete(url+`/${id}`).then((res)=>{
      console.log("delete data index ke ", id)
      console.log(res)
      handleClose()
      getData()
    }).then((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
        <NavbarMenu />
        <h1>Home</h1>
        <div className="container">
          {data?.map((item,index)=>(
            <div key={index+1}>
              <h5>{item.title}</h5>
              <img className='img-thumbnail' src={item.photo} style={{height:"100px"}} />
            <button className='btn btn-danger' onClick={()=>confirmDelete(item.id)}>
              delete menu
            </button>
            <button className='btn btn-warning' onClick={()=>editRecipes(item.id)}>
              edit menu
            </button>
            </div>
          ))}
        </div>

      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Kamu yakin hapus data ini</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>deleteData(selected)}>
            Delete data
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
