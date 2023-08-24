import { ReactComponent as IconEddit } from '../img/icons/pencil.svg';
import { ReactComponent as IconDelate } from '../img/icons/delate.svg';
import { ReactComponent as IconHelp } from '../img/icons/help-icon.svg';
import { ReactComponent as IconLogout } from '../img/icons/logout.svg';
import icons from '../img/icons/icons.svg'

import { HiOutlinePlusSm } from 'react-icons/hi';
import { Link, NavLink, useParams } from 'react-router-dom';
import help_1x from '../img/help/help1x.png';
import help_2x from '../img/help/help2x.png';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from 'redux/sidebar/slice';
import { logoutUser } from 'redux/auth/operation';
import Modal from './Modal';
import { useEffect } from 'react';
import { delateBoard, getAllBoards } from 'redux/boards/operations';
import { selectBoards } from 'redux/boards/selectors';
import NeedHelpForm from './NeedHelpForm';
import AddBoardForm from './AddBoardForm';
import UpdateBoardForm from './UpdateBoardForm';

const Sidebar = () => {
  const dispatch = useDispatch()
  const isOpenMenu = useSelector(state => state.sidebar.isOpen);
  const boards = useSelector(selectBoards);
  const {theme} = useSelector(state => state.auth);
  const {boardName} = useParams();

  const bgActiveBoard = () => {
    if(theme === 'dark'){
      return  '#1F1F1F'
    } else if(theme === 'violet'){
      return 'rgba(255, 255, 255, 0.50)'
    }else if(theme === 'light'){
      return '#F6F6F7'
    }
  }

  const colorActiveBoard = () => {
    if(theme === 'dark'){
      return  '#FFF'
    } else if(theme === 'violet'){
      return '#FFF'
    }else if(theme === 'light'){
      return '#161616'
    }
  }

  const activeBoard = {
    backgroundColor: bgActiveBoard(),
    color: "#FFF",
    borderRight: '4px solid #BEDBB0',
    borderRadius: '4px 0px 0px 4px',

  }


  const notActiveBoard = {
    color: theme === 'light' ? 'rgba(22, 22, 22, 0.50)' : 'rgba(255, 255, 255, 0.50)',
    opacity: 0.4,
  }

  useEffect(() => {
    dispatch(getAllBoards())
  }, [dispatch])


  const closeMenuOnBackdrop = e => {
    if(e.target !== e.currentTarget){
      return;
    }
    dispatch(openSideBar(false))
  }

  return <div className={`${isOpenMenu ? 'fixed top-0 left-0 w-full h-full bg-[#151515]/[.50] z-[999]' : 'sm:hidden lg:flex'}`} onClick={closeMenuOnBackdrop}>
  <div className={`w-[225px] md:w-[260px] overflow-y-scroll z-10 ${isOpenMenu ? 'flex fixed top-0 left-0' : "hidden"} lg:flex fixed h-screen ${theme === 'dark' && 'bg-[#121212]'} ${theme === 'light' && 'bg-[#fff]'} ${theme === 'violet' && 'bg-[#5255BC]'} text-white flex flex-col`} >
    <div className="px-[14px] py-[18]">
      <Link to='/' className="flex items-center gap-[8px] py-[18px] px-[14px] mb-[16px]">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 0H8C3.58172 0 0 3.58172 0 8V32C0 36.4183 3.58172 40 8 40H32C36.4183 40 40 36.4183 40 32V8C40 3.58172 36.4183 0 32 0Z" className={`fill-[#1F1F1F] ${theme === 'violet' && "fill-[#ECEDFD]"}`} />
<path d="M16.6643 28.7836C16.9698 27.1941 17.2301 25.5209 17.5979 23.8478C17.7789 22.9722 17.5583 22.5985 16.5794 22.6654C15.6005 22.7324 14.5085 22.6989 13.4674 22.6654C12.4263 22.632 12.2396 22.1077 12.8394 21.3604C15.7929 17.7129 18.7804 14.1101 21.7566 10.5184C22.0905 10.1113 22.4752 9.82126 23.0241 10.128C23.5729 10.4347 23.4597 10.814 23.3692 11.2713C23.041 12.9445 22.7694 14.6176 22.4073 16.2573C22.2206 17.105 22.4639 17.4062 23.3466 17.3727C24.2324 17.3281 25.12 17.3281 26.0059 17.3727C26.5095 17.3727 27.1715 17.1106 27.4318 17.7966C27.6921 18.4826 27.1432 18.7726 26.866 19.1797C25.7343 20.574 24.5876 21.9664 23.4258 23.357C21.7246 25.3871 20.0365 27.4097 18.3617 29.4249C18.0336 29.8209 17.6658 30.1388 17.1056 29.938C16.5455 29.7373 16.6643 29.2632 16.6643 28.7836Z" className={`${theme === 'violet' ? 'fill-[#5255BC]' : 'fill-[#fff]'}`}/>
</svg>

        <h1 className={`text-[16px] font-semibold tracking-[-0.64px] ${theme === 'light' ?'text-[#161616]' : 'text-[#fff]'}`}>
          Task Pro
        </h1>
      </Link>

      <div className="mb-[32px]">
        <h3 className={`mb-[8px] text-[12px] tracking-[-0.24px] ${theme === 'light' ? 'text-[#161616]/[.50]' : 'text-[#ffffff]/[.50]'}`}>
          My boards
        </h3>
        <div className={`flex justify-between items-center py-[14px] border-t border-b ${theme === 'light' ? 'border-[#161616]/[.10]' : 'border-[#ffffff]/[.10]'}`}>
          <h3 className={`font-medium w-[76px] tracking-[-0.28px] ${theme === 'light' ? 'text-[#161616]' : 'text-[#fff]'}`}>
            Create a new board
          </h3>

          <Modal data={<div className={`w-[40px] h-[36px] flex justify-center items-center ${theme === 'violet' ? 'bg-[#B8BCFD]' : 'bg-[#BEDBB0]'} rounded-[6px]`}>
            <HiOutlinePlusSm className={`w-[24px] h-[24px] ${theme === 'violet' ? 'text-[#fff]' : 'text-[#121212]'}`} />
          </div>} textModal={'New board'}>
            <AddBoardForm/>
</Modal>
        </div>
      </div>
    </div>

    <ul className="flex flex-col gap[4px] mb-[32px] max-h-[120px] overflow-y-scroll">
      {boards?.map(item =>  {
        if(!item) {
          return null
        }
        return <li className='w-full flex justify-between items-center relative' key={item._id}>
        <NavLink to={`/${item.title}`} className="py-[22px] px-[14px] w-full" style={({isActive}) => isActive ? activeBoard : notActiveBoard}>
          <div className="flex gap-[8px] items-center">
           <svg className='w-[18px] h-[18px]' stroke={colorActiveBoard()}  >
            <use href={icons + `#${item.icon}`}></use>
           </svg>
            <h3 className={`font-medium ${theme === 'light' ? 'text-[#161616]' : 'text-[#fff]'}`}>{item.title}</h3>
          </div>
        </NavLink>
       {item.title === boardName && <div className="flex gap-[8px] items-center absolute top-6 right-4">
        <Modal styles={'flex'} data={ <IconEddit stroke={`${theme === 'light' ? '#16161680' : '#FFFFFF80'}`}/>} textModal={'Eddit board'}>
        <UpdateBoardForm title={item.title} background={item.background} icon={item.icon} id={item._id}/>
      </Modal>
      <button type='button' onClick={() => dispatch(delateBoard(item._id))}>
      <IconDelate stroke={`${theme === 'light' ? '#16161680' : '#FFFFFF80'}`}/>
      </button>
          </div>}

        </li> 
      }
      )}
    </ul>

<div className='mt-auto flex flex-col gap-[24px]'>
    <div className="px-[14px]">
      <div className={`p-[14px] ${theme === 'dark' && 'bg-[#1F1F1F]'} ${theme === 'light' && 'bg-[#F6F6F7]'} ${theme === 'violet' && 'bg-[#ecedfd]/[.40]'} rounded-[8px]`}>
        <img
          srcSet={`${help_1x} 54w, ${help_2x} 108w`}
          src={help_1x}
          alt="Help img"
          width="54"
          height="78"
          className="mb-[14px]"
        />
        <p className={`text-[12px] md:text-[14px] ${theme === 'light' ? 'text-[#161616]' : 'text-[#fff]'} leading-4 tracking-[-0.24px] w-[168px] mb-[18px]`}>
          If you need help with{' '}
          <button type="button" className={`${theme === 'violet' ? 'text-[#5255BC]' : 'text-[#BEDBB0]'}`}>
            TaskPro
          </button>{' '}
          check out our support resources or reach out to our customer
          support team.
        </p>

<Modal data={ <div className="flex items-center gap-[8px] font-medium text-[12px] tracking-[-0.24px]">
          <IconHelp className="w-[24px] h-[24px]" stroke={`${theme === 'light' ? '#161616' : '#fff'}`}/>
          <h3 className={`${theme === 'light' ? 'text-[#161616]' : 'text-[#fff]'} `}>Need help?</h3>
        </div>} textModal={'Need help?'}>
         <NeedHelpForm/>
</Modal>
      </div>
    </div>

<div className='pl-[24px] pb-[24px]'> 
    <div className='flex items-center gap-[14px]' onClick={() => dispatch(logoutUser())}>
      <IconLogout stroke={`${theme === 'violet' ? "#FFFFFF" : "#BEDBB0"}`}/>
      <h3 className={`${theme === 'light' ? 'text-[#161616]' : "#fff"}`}>Log out</h3>
    </div>
    </div>
    </div>

  </div>
</div>
};

export default Sidebar;
