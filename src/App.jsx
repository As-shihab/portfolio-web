import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/page'
import Layout from "./Pages/Layout/page"
import Project from './Pages/Project/page'
import Story from './Pages/Blogs/page'
import Gallery from './Pages/Gallery/page'
import Error from './Pages/Error/page'
import Admin from './Pages/Admin/page'
import MeStory from './Pages/Admin/Story'
import Chart from './Pages/Admin/Components/Chart'
import MeDeshbord from './Pages/Admin/Components/Deshbord'


//  child route

import PreLoader from './PreLoader'
import Websites from './Pages/Admin/Components/Websites'
import { UserContext } from './Context/AuthContext'
import Auth from './Pages/Auth/Layout'
import ViewBlog from './Pages/Blogs/ViewBlog'
import Contact from './Pages/Contact/Contact'
import SignIn from './Pages/Contact/Login/page'
import SignUp from './Pages/Contact/SignUp/page'
import { http } from './http/http'
import Guyst from './Pages/Contact/User/Guyst'

export default function App() {
  const [loader ,setLoader] =useState(true)
  const [islogin ,setLogin] =useState(false)
  const [isuser, setUser] =useState(false)
  const [userdata ,setUserData] =useState('')
  const [isactiveuser , setIsactiveUser] =useState(false)

  setTimeout(() => {
    setLoader(false)
  }, 1000);





 const CheckAdmin = async ()=>{

await http.get('admin/verifytoken')
.then(res=>{
if(res.data.admin || res.data.verify){
  setLogin(true)
}
})

}
// chekck user

const CheckUser = async ()=>{
  await http.get('shihab/isguyst')
  .then(res=>{if(res.data.user){
    console.log(res.data)
      setUser(true)
    setUserData(res.data)
  }else{setUser(false)}
})
  .catch(err=>{console.log(err.message)})
}
// check if user is active

useEffect(()=>{
CheckAdmin()
CheckUser()
},[])



  return (
    <div className='dark:bg-slate-900 min-h-screen   dark:text-white'>
    <UserContext.Provider value={{islogin , setLogin , isuser , userdata , isactiveuser}}>

   
    {
      loader? <PreLoader/> : 

      <BrowserRouter>
      <Layout/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Blogs' element={<Story/>} />
       <Route path="/Blogs/viewblog/:id" element={<ViewBlog/>} />
       <Route path='/Project' element={<Project/>} />
       <Route path='/Gallery' element={<Gallery/>} />
       <Route path='*' element={<Error/>} />
     
       <Route path='/Contact' element={!isuser? <Contact/> :<Guyst/> } >
     <Route path='login' element={<SignIn/>} />
      <Route path='signup' element={<SignUp/>} />
      </Route>
     
  



       <Route path='/me' element={islogin? <Admin/> : <Auth/>} >
        <Route path='card' element={<MeDeshbord/>} />
        <Route path='story' element={<MeStory/>} />
        
        <Route path='chart' element={<Chart/>} />
      <Route path="website/:id" element={<Websites/>} />
  
       </Route>
      </Routes>
      
      </BrowserRouter>


    }
</UserContext.Provider>
    </div>
  )
}
