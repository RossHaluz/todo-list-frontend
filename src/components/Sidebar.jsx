import { ReactComponent as IconLogo } from '../img/icons/icon.svg';
import { ReactComponent as IconProject } from '../img/icons/project.svg';
import { ReactComponent as IconEddit } from '../img/icons/pencil.svg';
import { ReactComponent as IconDelate } from '../img/icons/delate.svg';
import { ReactComponent as IconHelp } from '../img/icons/help-icon.svg';
import { ReactComponent as IconLogout } from '../img/icons/logout.svg';


import { HiOutlinePlusSm } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import help_1x from '../img/help/help1x.png';
import help_2x from '../img/help/help2x.png';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from 'redux/sidebar/slice';

const Sidebar = () => {
  const dispatch = useDispatch()
  const isOpenMenu = useSelector(state => state.sidebar.isOpen)

  const closeMenuOnBackdrop = e => {
    if(e.target !== e.currentTarget){
      return
    }
    dispatch(openSideBar(false))
  }


  return <>{isOpenMenu && <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#151515]/[.50]" onClick={closeMenuOnBackdrop} >
  <div className="w-[225px] h-[100%] bg-[#121212] text-white flex flex-col">
    <div className="px-[14px] py-[18]">
      <div className="flex items-center gap-[8px] py-[18px] px-[14px] mb-[74px]">
        <IconLogo fill="#1F1F1F" />
        <h1 className="text-[16px] font-semibold tracking-[-0.64px]">
          Task Pro
        </h1>
      </div>

      <div className="mb-[40px]">
        <h3 className="mb-[8px] text-[12px] tracking-[-0.24px] text-[#ffffff]/[.50]">
          My boards
        </h3>
        <div className="flex justify-between items-center py-[14px] border-t border-b border-[#ffffff]/[.10]">
          <h3 className="font-medium w-[76px] tracking-[-0.28px]">
            Create a new board
          </h3>
          <div className="w-[40px] h-[36px] flex justify-center items-center bg-[#BEDBB0] rounded-[6px]">
            <HiOutlinePlusSm className="w-[24px] h-[24px] text-[#121212]" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap[4px]">
      <NavLink className="flex justify-between items-center w-full py-[18px] px-[14px] bg-[#1F1F1F] border-r-4 border-[#BEDBB0]">
        <div className="flex gap-[4px] items-center">
          <IconProject />
          <h3>Project office</h3>
        </div>
        <div className="flex gap-[8px] items-center">
          <IconEddit />
          <IconDelate />
        </div>
      </NavLink>
    </div>

<div className='mt-auto flex flex-col gap-[24px]'>
    <div className="px-[14px]">
      <div className="p-[14px] bg-[#1F1F1F] rounded-[8px]">
        <img
          srcSet={`${help_1x} 54w, ${help_2x} 108w`}
          src={help_1x}
          alt="Help img"
          width="54"
          height="78"
          className="mb-[14px]"
        />
        <p className="text-[12px] leading-4 tracking-[-0.24px] w-[168px] mb-[18px]">
          If you need help with{' '}
          <button type="button" className="text-[#BEDBB0]">
            TaskPro
          </button>{' '}
          check out our support resources or reach out to our customer
          support team.
        </p>

        <div className="flex items-center gap-[8px] font-medium text-[12px] tracking-[-0.24px]">
          <IconHelp className="w-[24px] h-[24px]" />
          <h3>Need help?</h3>
        </div>
      </div>
    </div>

<div className='p-[24px]'> 
    <div className='flex items-center gap-[14px]'>
      <IconLogout/>
      <h3>Log out</h3>
    </div>
    </div>
    </div>

  </div>
</div>}</>
};

export default Sidebar;
