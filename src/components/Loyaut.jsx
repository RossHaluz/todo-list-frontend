import React, { Suspense } from 'react'
import AppBar from './AppBar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Loyaut = () => {
  return <div>
    <Sidebar/>
    <div className='container m-auto'>
      <AppBar/>
    </div>
    <div className='container m-auto w-[100vw] bg-[#1F1F1F] px-[20px] py-[14px]'>
      <Suspense fallback={"Loading..."}>
        <Outlet/>
     </Suspense>
    </div>
  </div>
}

export default Loyaut
