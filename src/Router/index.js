import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import AuthChecker from '../Component/AuthChecker'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Add from '../Pages/Add'
import Edit from '../Pages/Edit'
import Login from '../Pages/Auth/Login'

function App(){
    return(
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Navigate to='home' replace="true"/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/profile' element={
                            <AuthChecker>
                                <Profile/>
                            </AuthChecker>
                        } />
                        <Route path='/add' element={<Add/>} />
                        <Route path='/edit/:id' element={<Edit/>} />
                        <Route path='/login' element={<Login/>} />
                    </Routes>
            </BrowserRouter>
    )
}

export default App