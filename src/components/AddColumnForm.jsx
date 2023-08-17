import { ErrorMessage, Field, Form, Formik } from "formik"
import {BiPlus} from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createColumn } from "redux/columns/operations";
import * as Yup from 'yup'

const schema = Yup.object({
  title: Yup.string("Type a title").required("Title is required")
})

const AddColumnForm = () => {
const {boardName} = useParams();
const dispatch = useDispatch()

  const initialValues = {
    title: ''
  }

const onSubmit = (value, {resetForm}) => {
  dispatch(createColumn({...value, boardName}))
  resetForm()
}

  return <div>
<h2 className="text-white font-medium text-[18px] tracking-[-0.36px]">Add column</h2>
<Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={schema}
  >
  <Form className="mt-[24px] w-full flex flex-col gap-[24px]">
    <Field name="title" placeholder="Title" className="w-full bg-[#1F1F1F] border border-solid border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-none"/>
    <ErrorMessage component='p' name="title" className="text-red-500"/>

    <button type="submit" className="w-full flex justify-center items-center gap-[8px] py-[10px] text-[#161616] font-medium tracking-[-0.28px] bg-[#BEDBB0] rounded-[8px]">
      <div className="bg-[#161616] p-[7px] rounded-[8px] text-white">
        <BiPlus/>
      </div>
      Add
      </button>
  </Form>
  </Formik>
  </div>
}

export default AddColumnForm
