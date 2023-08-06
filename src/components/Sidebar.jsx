import { ReactComponent as IconLogo } from '../img/icons/icon.svg';
import { ReactComponent as IconProject } from '../img/icons/project.svg';
import { ReactComponent as IconEddit } from '../img/icons/pencil.svg';
import { ReactComponent as IconDelate } from '../img/icons/delate.svg';
import { ReactComponent as IconHelp } from '../img/icons/help-icon.svg';
import { ReactComponent as IconLogout } from '../img/icons/logout.svg';
import icons from '../img/icons/icons.svg'
import {BiPlus} from 'react-icons/bi'

import { HiOutlinePlusSm } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import help_1x from '../img/help/help1x.png';
import help_2x from '../img/help/help2x.png';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from 'redux/sidebar/slice';
import { logoutUser } from 'redux/auth/operation';
import Modal from './Modal';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { bgc } from 'source/bgc';

const validateSchema = Yup.object({
  title: Yup.string('Type title of this board').required('Title is required'),
  icon: Yup.string('Choose an icon for your board'),
  backgraund: Yup.string('Choose a backgraund for your board')
})

const BOARD_ICONS = [
  'board-icon1',
  'board-icon2',
  'board-icon3',
  'board-icon4',
  'board-icon5',
  'board-icon6',
  'board-icon7',
  'board-icon8',
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const isOpenMenu = useSelector(state => state.sidebar.isOpen);
  const [icon, setIcon] = useState(icons + '#board-icon1');
  const [backgraund, setBackgraund] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const closeMenuOnBackdrop = e => {
    if(e.target !== e.currentTarget){
      return
    }
    dispatch(openSideBar(false))
  }

  const initialValues = {
    title: '',
    icon: icon,
    backgraund: backgraund
  }

  const onSubmit = (value, {resetForm}) => {
    console.log(value);
    resetForm()
  }

  return <div className={`${isOpenMenu ? 'fixed top-0 left-0 w-full h-[100vh] bg-[#151515]/[.50]' : 'sm:hidden lg:flex'}`} onClick={closeMenuOnBackdrop}>
  <div className={`w-[225px] md:w-[260px] ${isOpenMenu ? 'flex fixed top-0 left-0' : "hidden"} lg:flex min-h-screen bg-[#121212] text-white flex flex-col overflow-scroll`} >
    <div className="px-[14px] py-[18]">
      <div className="flex items-center gap-[8px] py-[18px] px-[14px] mb-[16px]">
        <IconLogo fill="#1F1F1F" />
        <h1 className="text-[16px] font-semibold tracking-[-0.64px]">
          Task Pro
        </h1>
      </div>

      <div className="mb-[32px]">
        <h3 className="mb-[8px] text-[12px] tracking-[-0.24px] text-[#ffffff]/[.50]">
          My boards
        </h3>
        <div className="flex justify-between items-center py-[14px] border-t border-b border-[#ffffff]/[.10]">
          <h3 className="font-medium w-[76px] tracking-[-0.28px]">
            Create a new board
          </h3>
          <div className="w-[40px] h-[36px] flex justify-center items-center bg-[#BEDBB0] rounded-[6px]" onClick={() => setIsOpen(true)}>
            <HiOutlinePlusSm className="w-[24px] h-[24px] text-[#121212]" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap[4px] mb-[32px]">
      <NavLink className="flex justify-between items-center w-full py-[22px] px-[14px] bg-[#1F1F1F] border-r-4 border-[#BEDBB0]">
        <div className="flex gap-[4px] items-center">
          <IconProject />
          <h3 className='font-medium'>Project office</h3>
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
        <p className="text-[12px] md:text-[14px] leading-4 tracking-[-0.24px] w-[168px] mb-[18px]">
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

<div className='pl-[24px] pb-[24px]'> 
    <div className='flex items-center gap-[14px]' onClick={() => dispatch(logoutUser())}>
      <IconLogout/>
      <h3>Log out</h3>
    </div>
    </div>
    </div>

  </div>

{isOpen && <Modal setIsOpen={setIsOpen}>
  <div className='flex justify-between items-center mb-[24px]'>
  <h2 className='text-white font-medium text-[18px] tracking-[-0.36px]'>New board</h2>
  </div>
  <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validateSchema}
  >
<Form>
  <div className='flex flex-col gap-[24px]'>
  <Field type="text" name="title" placeholder="Title" className="bg-[#1F1F1F] border border-solid border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-none"/>
<div className='flex flex-col gap-[14px]'>
<h3 className='text-white'>Icons</h3>
<div className='flex gap-[8px] items-center'>
  {BOARD_ICONS.map(item => {
  return  <label key={item} className='flex cursor-pointer'>
      <Field type="radio" name='icon' onClick={e => setIcon(item)} className="appearance-none" value={item} />
      <svg width='18' height='18'>
        <use href={`${icons}#${item}`}></use>
      </svg>
    </label>
  })}
</div>
</div>

<div className='flex flex-col gap-[14px] mb-[40px]'>
<h3 className='text-white'>Background</h3>
<ul className='flex items-center gap-[4px] flex-wrap'>
  {bgc?.slice(1).map(({id, alt, URL}) => {
  return <li key={id}>
    <label className='flex'>
      <Field type="radio" name="backgraund" onClick={e => setBackgraund(URL.icon)} value={URL.icon} className="appearance-none"/>
    <img src={URL.icon} alt={alt} />
    </label>
    </li>
  })}
</ul>
</div>
</div>
<button type='submit' className='w-[287px] flex justify-center items-center gap-[8px] py-[10px] text-[#161616] font-medium tracking-[-0.28px] bg-[#BEDBB0] rounded-[8px]'>
  <div className='bg-[#161616] p-[7px] rounded-[8px]'>
  <BiPlus className='text-white w-[14px] h-[14px]'/>
  </div>
  Create
  </button>
</Form>
  </Formik>

</Modal>}
</div>
};

export default Sidebar;
