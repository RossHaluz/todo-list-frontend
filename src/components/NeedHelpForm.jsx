import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';

const schema = Yup.object({
    email: Yup.string("Type your email").required("Email is required"),
    comment: Yup.string("Type your comment").required("Comment is required")
})

const NeedHelpForm = () => {

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
        <Field name="email" type="text" placeholder="Email address" className="bg-transparent border border-solid border-[#BEDBB0] rounded-[8px] px-[18px] py-[14px] opacity-[0.4] outline-none text-white"/>
        <ErrorMessage name="email" component="p" className="text-red-500"/>

        <Field name="comment" as="textarea" placeholder="Comment" className="bg-transparent border border-solid border-[#BEDBB0] rounded-[8px] px-[18px] py-[14px] opacity-[0.4] outline-none h-[120px] text-white"/>
        <ErrorMessage name="comment" component="p" className="text-red-500"/>
        <button type="submit" className="bg-[#BEDBB0] rounded-[8px] w-full py-[14px] px-[14px] text-[#161616] font-medium tracking-[-0.28px]">Send</button>
    </Form>
  </Formik>
}

export default NeedHelpForm
