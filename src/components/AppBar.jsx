import AuthNav from './AuthNav'
import Navigation from './Navigation'

const AppBar = () => {
  return (
    <header className='py-[14px] px-[20px] flex justify-between bg-[#161616]'>
      <Navigation/>
      <AuthNav/>
    </header>
  )
}

export default AppBar
