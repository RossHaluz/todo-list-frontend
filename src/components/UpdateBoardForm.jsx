import { Field, Form, Formik, ErrorMessage } from "formik"
import {BiPlus} from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { updateBoard } from "redux/boards/operations";
import { bgc } from 'source/bgc';
import * as Yup from 'yup';
import icons from '../img/icons/icons.svg';

const validateSchema = Yup.object({
    title: Yup.string('Type title of this board').required('Title is required'),
    icon: Yup.string('Choose an icon for your board'),
    backgraund: Yup.string('Choose a backgraund for your board')
  })

const UpdateBoardForm = ({title, background, icon, id}) => {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.auth);

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

      const initialValues = {
        title: title,
        icon: icon,
        background: background
      }
    
      const onSubmit = (value, {resetForm}) => {
        console.log(value);
        dispatch(updateBoard({id, ...value}))
        resetForm();
      }

  return <>
  <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validateSchema}
  >
    {({values}) => (
<Form>
  <div className='flex flex-col gap-[24px]'>
  <Field type="text" name="title" placeholder="Title" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none`}/>
  <ErrorMessage component='p' name='title' className="text-red-500"/>
<div className='flex flex-col gap-[14px]'>
<h3 className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'}`}>Icons</h3>
<div className='flex gap-[8px] items-center'>
  {BOARD_ICONS.map(item => {
  return  <label key={item} className='flex cursor-pointer'>
      <Field type="radio" name='icon' className="appearance-none checked:opacity-[1]" value={item}/>
      <svg width='18' height='18' className={`hover:opacity-[1] ${values.icon === item ? 'opacity-[1]' : 'opacity-[0.4]'}`} stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`}>
        <use href={`${icons}#${item}`}></use>
      </svg>
    </label>
  })}
</div>
</div>

<div className='flex flex-col gap-[14px] mb-[40px]'>
<h3 className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'}`}>Background</h3>
<ul className='flex items-center gap-[4px] flex-wrap'>
  {bgc?.slice(1).map(({id, alt, URL, bgname}) => {
    console.log(values.background === URL.icon);
  return <li key={id} className={`border-2 ${values.background === bgname ? `${theme === 'dark' && 'border-[#fff] '} rounded-[8px]` : 'border-none'} ${theme === 'light' && 'border-[#BEDBB0]'} ${theme === 'violet' && 'border-[#5255BC]'}`}>
    <label className='flex cursor-pointer'>
      <Field type="radio" name="background" value={bgname} className="appearance-none"/>
    <img src={URL.icon} alt={alt} />
    </label>
    </li>
  })}
</ul>
</div>
</div>
<button type='submit' className={`w-full flex justify-center items-center gap-[8px] py-[10px] font-medium tracking-[-0.28px] ${theme === 'violet' ? 'bg-[#5255BC] text-[#fff]' : 'bg-[#BEDBB0] text-[#161616]'} rounded-[8px]`}>
  <div className={`${theme === 'violet' ? 'bg-[#fff]' : 'bg-[#161616]'} p-[7px] rounded-[8px]`}>
  <BiPlus className={`${theme === 'violet' ? 'text-[#161616]' : 'text-[#fff]'} w-[14px] h-[14px]`}/>
  </div>
  Eddit
  </button>
</Form>
)}
  </Formik>
  </>
}

export default UpdateBoardForm
