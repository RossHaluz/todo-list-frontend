import { ReactComponent as IconLogo } from '../img/icons/icon.svg';
import { HiOutlinePlusSm } from 'react-icons/hi';

const Sidebar = () => {
  return <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#151515]/[.50]">
    <div className="w-[225px] h-[100%] px-[14px] py-[18] bg-[#121212] text-white">

    <div className="flex items-center gap-[8px] py-[18px] px-[14px] mb-[74px]">
        <IconLogo fill='#1F1F1F'/>
        <h1 className="text-[16px] md:text-[40px] font-semibold tracking-[-0.64px]">
          Task Pro
        </h1>
      </div>

      <div>
        <h3>My boards</h3>
        <div className='flex justify-between items-center py-[14px] border-t border-b border-[#ffffff]/[.10]'>
            <h3 className='font-medium'>Create a new board</h3>
            <div>
                <HiOutlinePlusSm/>
            </div>
        </div>
      </div>
        
    </div>
  </div>
}

export default Sidebar
