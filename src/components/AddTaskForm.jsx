import { Field, Form, Formik, ErrorMessage } from "formik"
import {BiPlus} from 'react-icons/bi';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./Calendar";
import { createTask } from "redux/tasks/operations";

const validateSchema = Yup.object({
    title: Yup.string('Type a title').required('Title is required'),
    desc: Yup.string('Type a description').required('Description is required'),
    priority: Yup.string('Choose a priority').required('Priority is required'),
    deadline: Yup.date('Type a deadline').required('Deadline is required'),
  })

const AddTaskForm = ({id}) => {
    const dispatch = useDispatch()

      const initialValues = {
        title: '',
        desc: '',
        priority: '',
        deadline: new Date()
      }
    
      const onSubmit = (value, {resetForm}) => {
        dispatch(createTask({value, id}))
        resetForm();
      }

  return <>
  <div className='flex justify-between items-center mb-[24px]'>
  <h2 className='text-white font-medium text-[18px] tracking-[-0.36px]'>Add card</h2>
  </div>
  <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validateSchema}
  >
     {({  values, setFieldValue }) => (
<Form>
    <div className="flex flex-col gap-[14px] mt-[24px]">
  <div className='flex flex-col gap-[24px]'>
  <Field type="text" name="title" placeholder="Title" className="bg-[#1F1F1F] border border-solid border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-none"/>
  <ErrorMessage component='p' name='title' className="text-red-500"/>
</div>

<div className='flex flex-col gap-[24px]'>
  <Field as='textarea' name="desc" placeholder="Description" className="bg-[#1F1F1F] resize-none border border-solid h-[154px] border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-non"/>
  <ErrorMessage component='p' name='desc' className="text-red-500"/>
</div>
</div>

<div className="flex flex-col mt-[24px] gap-[14px] mb-[40px]">
  <div>
    <h3 className="text-[#ffffff]/[.50]">Label color</h3>
    <div className="flex gap-[8px] items-center mt-[4px]" role="group" aria-labelledby="my-radio-group">
    <Field type="radio" name="priority" value="Low" className="appearance-none flex justify-center items-center bg-[#8FA1D0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#8FA1D0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />

<Field type="radio" name="priority" value="Medium" className="appearance-none flex justify-center items-center bg-[#E09CB5] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#E09CB5] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]"  />

<Field type="radio" name="priority" value="High" className="appearance-none flex justify-center items-center bg-[#BEDBB0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#BEDBB0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />

<Field type="radio" name="priority" value="Without priority" className="appearance-none flex justify-center items-center bg-[#ffffff]/[.30] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#ffffff]/[.30] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />
</div>
<ErrorMessage component='p' name="priority" className="text-red-500 mt-[24px]"/>
    </div>

    <div className="flex flex-col gap-[4px]">
    <h3 className="text-[#ffffff]/[.50]">Deadline</h3>
    <Calendar name="deadline" selected={values.deadline} onSelect={date => setFieldValue('deadline', date)}/>
    </div>
</div>


<button type='submit' className='w-[287px] flex justify-center items-center gap-[8px] py-[10px] text-[#161616] font-medium tracking-[-0.28px] bg-[#BEDBB0] rounded-[8px]'>
  <div className='bg-[#161616] p-[7px] rounded-[8px]'>
  <BiPlus className='text-white w-[14px] h-[14px]'/>
  </div>
  Add
  </button>
  
</Form>
   )}
  </Formik>
  </>
}

export default AddTaskForm
