import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Loyaut = () => {
  return <div>
    <div className='container m-auto w-[100vw] bg-[#1F1F1F] '>
      <Suspense fallback={"Loading..."}>
        <Outlet/>
     </Suspense>
    </div>
  </div>
}

export default Loyaut
