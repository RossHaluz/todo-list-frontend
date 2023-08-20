import { ErrorMessage, Field, Form, Formik } from "formik"
import {BiPlus} from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createColumn } from "redux/columns/operations";
import * as Yup from 'yup';

const schema = Yup.object({
  title: Yup.string("Type a title").required("Title is required")
})

const AddColumnForm = () => {
const {boardName} = useParams();
const dispatch = useDispatch();
const {theme} = useSelector(state => state.auth);

  const initialValues = {
    title: ''
  }

const onSubmit = (value, {resetForm}) => {
  dispatch(createColumn({...value, boardName}))
  resetForm()
}

  return <div>
<Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={schema}
  >
  <Form className="w-full flex flex-col gap-[24px]">
    <Field name="title" placeholder="Title" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none`}/>
    <ErrorMessage component='p' name="title" className="text-red-500"/>

    <button type="submit" className={`w-full flex justify-center items-center gap-[8px] py-[10px] font-medium tracking-[-0.28px] ${theme === 'violet' ? 'bg-[#5255BC] text-[#fff]' : 'bg-[#BEDBB0] text-[#161616]'} rounded-[8px]`}>
      <div className={`${theme === 'violet' ? 'bg-[#fff]' : 'bg-[#161616]'} p-[7px] rounded-[8px]`}>
        <BiPlus className={`${theme === 'violet' ? 'text-[#161616]' : 'text-[#fff]'} w-[14px] h-[14px]`}/>
      </div>
      Add
      </button>
  </Form>
  </Formik>
  </div>
}

export default AddColumnForm
