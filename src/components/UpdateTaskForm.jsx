import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "./Calendar";
import { BiPlus } from "react-icons/bi";
import * as Yup from 'yup';
import { updateTask } from "redux/tasks/operations";

const validateSchema = Yup.object({
    title: Yup.string('Type a title').required('Title is required'),
    desc: Yup.string('Type a description').required('Description is required'),
    priority: Yup.string('Choose a priority').required('Priority is required'),
    deadline: Yup.date('Type a deadline').required('Deadline is required'),
  })


const UpdateTaskForm = ({title, desc, priority, deadline, id}) => {
const {theme} = useSelector(state => state.auth);
const dispatch = useDispatch()


const initialValues = {
    title: title,
    desc: desc,
    priority: priority,
    deadline: new Date(deadline)
  }

  const onSubmit = (value, {resetForm}) => {
    dispatch(updateTask({...value, id}))
    resetForm();
  }

  return   <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validateSchema}
  >
     {({  values, setFieldValue }) => (
<Form>
    <div className="flex flex-col gap-[14px]">
  <div className='flex flex-col gap-[24px]'>
  <Field type="text" name="title" placeholder="Title" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none`}/>
  <ErrorMessage component='p' name='title' className="text-red-500"/>
</div>

<div className='flex flex-col gap-[24px]'>
  <Field as='textarea' name="desc" placeholder="Description" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none h-[154px]`}/>
  <ErrorMessage component='p' name='desc' className="text-red-500"/>
</div>
</div>

<div className="flex flex-col mt-[24px] gap-[14px] mb-[40px]">
  <div>
    <h3 className={`${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#16161680]'}`}>Label color</h3>
    <div className="flex gap-[8px] items-center mt-[4px]" role="group" aria-labelledby="my-radio-group">
    <Field type="radio" name="priority" value="Low" className="appearance-none flex justify-center items-center bg-[#8FA1D0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#8FA1D0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />

<Field type="radio" name="priority" value="Medium" className="appearance-none flex justify-center items-center bg-[#E09CB5] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#E09CB5] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]"  />

<Field type="radio" name="priority" value="High" className="appearance-none flex justify-center items-center bg-[#BEDBB0] w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:after:border-[#BEDBB0] checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]" />

<Field type="radio" name="priority" value="Without priority" className={`appearance-none flex justify-center items-center ${theme === 'dark' ? 'bg-[#ffffff]/[.30] checked:after:border-[#ffffff]/[.30]' : 'bg-[#161616]/[.30] checked:after:border-[#161616]/[.30]'} w-[14px] h-[14px] rounded-[50%] relative checked:after:content-[''] checked:after:absolute checked:after:w-[20px] checked:after:h-[20px] checked:after:bg-transparent checked:after:border checked:after:border-solid checked:w-[14px] checked:h-[14px] checked:after:rounded-[50%]`} />
</div>
<ErrorMessage component='p' name="priority" className="text-red-500 mt-[24px]"/>
    </div>

    <div className="flex flex-col gap-[4px]">
    <h3 className={`${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#16161680]'}`}>Deadline</h3>
    <Calendar name="deadline" selected={values.deadline} onSelect={date => setFieldValue('deadline', date)}/>
    </div>
</div>


<button type='submit' className={`w-full flex justify-center items-center gap-[8px] py-[10px] font-medium tracking-[-0.28px] ${theme === 'violet' ? 'bg-[#5255BC] text-[#fff]' : 'bg-[#BEDBB0] text-[#161616]'} rounded-[8px]`}>
  <div className={`${theme === 'violet' ? 'bg-[#fff]' : 'bg-[#161616]'} p-[7px] rounded-[8px]`}>
  <BiPlus className={`${theme === 'violet' ? 'text-[#161616]' : 'text-[#fff]'} w-[14px] h-[14px]`}/>
  </div>
  Add
  </button>
  
</Form>
   )}
  </Formik>
}

export default UpdateTaskForm
