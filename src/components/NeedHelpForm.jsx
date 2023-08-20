import { ErrorMessage, Field, Form, Formik } from "formik"
import { useSelector } from "react-redux";
import * as Yup from 'yup';

const schema = Yup.object({
    email: Yup.string("Type your email").required("Email is required"),
    comment: Yup.string("Type your comment").required("Comment is required")
})

const NeedHelpForm = () => {
    const {theme} = useSelector(state => state.auth);

    const initialValues = {
        email: '',
        comment: ""
    }

    const onSubmit = (value, {resetForm}) => {
        console.log(value);
        resetForm()
    }

  return <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={schema}
  >
    <Form className="flex flex-col gap-[14px] w-full">
        <Field name="email" type="text" placeholder="Email address" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none`}/>
        <ErrorMessage name="email" component="p" className="text-red-500"/>

        <Field name="comment" as="textarea" placeholder="Comment" className={`${theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-transparent'} border border-solid ${theme === 'violet' ? 'border-[#5255BC]' : ' border-[#BEDBB0]'} rounded-[8px] py-[14px] px-[18px] shadow-[0px_4px_16px_0px_#16161614] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} tracking-[-0.28px] opacity-[0.4] outline-none h-[120px]`}/>
        <button type="submit" className={`w-full flex justify-center items-center gap-[8px] py-[10px] font-medium tracking-[-0.28px] ${theme === 'violet' ? 'bg-[#5255BC] text-[#fff]' : 'bg-[#BEDBB0] text-[#161616]'} rounded-[8px]`}>Send</button>
    </Form>
  </Formik>
}

export default NeedHelpForm
