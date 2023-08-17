import { Field, Form, Formik, ErrorMessage } from "formik"
import {BiPlus} from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { updateBoard } from "redux/boards/operations";
import { bgc } from 'source/bgc';
import * as Yup from 'yup';
import icons from '../img/icons/icons.svg'

const validateSchema = Yup.object({
    title: Yup.string('Type title of this board').required('Title is required'),
    icon: Yup.string('Choose an icon for your board'),
    backgraund: Yup.string('Choose a backgraund for your board')
  })

const UpdateBoardForm = ({title, background, icon, id}) => {
    const dispatch = useDispatch()

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

        dispatch(updateBoard({id, ...value}))
        resetForm();
      }

  return <>
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
  <ErrorMessage component='p' name='title' className="text-red-500"/>
<div className='flex flex-col gap-[14px]'>
<h3 className='text-white'>Icons</h3>
<div className='flex gap-[8px] items-center'>
  {BOARD_ICONS.map(item => {
  return  <label key={item} className='flex cursor-pointer'>
      <Field type="radio" name='icon' className="appearance-none checked:opacity-[1]"/>
      <svg width='18' height='18' className="opacity-[0.4] hover:opacity-[1] checked:opacity-[1] focus:opacity-[1]">
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
      <Field type="radio" name="background" className="appearance-none"/>
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
  </>
}

export default UpdateBoardForm