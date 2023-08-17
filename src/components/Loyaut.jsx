import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Loyaut = () => {
  return  <div className='container m-auto w-[100vw] h-[100vh]'>
  <Suspense fallback={"Loading..."}>
    <Outlet/>
 </Suspense>
</div>
}

export default Loyaut