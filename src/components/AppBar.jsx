import { useSelector } from 'react-redux';
import AuthNav from './AuthNav'
import Navigation from './Navigation';

const AppBar = () => {
const {theme} = useSelector(state => state.auth)

  return (
    <header className={`py-[18px] z-[999] px-[24px] flex justify-between ${theme === 'dark' && 'bg-[#161616]'} ${theme === 'violet' && 'bg-[#fff]'} ${theme === 'light' && 'bg-[#FCFCFC]'} lg:w-[calc(100vw-260px)] lg:fixed lg:top-0 lg:right-0 lg:flex`}>
      <Navigation/>
      <AuthNav/>
    </header>
  )
}

export default AppBar
