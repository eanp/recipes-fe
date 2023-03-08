import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Add from '../Pages/Add'

function App(){
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='home' replace="true"/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/profile' element={<Profile/>} />
                        <Route path='/add' element={<Add/>} />
                    </Routes>
            </BrowserRouter>
    )
}

export default App