import { Field, Form, Formik } from 'formik';
import { NavLink, Link } from 'react-router-dom';
import * as yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { ReactComponent as IconLogo } from '../img/icons/icon.svg';
import { loginUser } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';

const validateSchema = yup.object({
  email: yup
    .string('Type your email')
    .email('Type a valid email')
    .required('Email is required'),
  password: yup.string('Type your password').required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch()
  const initialValues = {
    email: '',
    password: '',
  };
  const [open, setOpen] = useState(false);

const toggle = () => {
    setOpen(!open)
}

  const activeStyles = {
    color: 'white',
  };

  const onSubmit = (value, { resetForm }) => {
    dispatch(loginUser(value))
    resetForm();
  };

  return (
    <div className="flex justify-center items-center m-auto flex-col gap-5 w-full h-[100vh] bg-gradient-to-t from-[#BEDBB0] from-92.19% to-[180deg, rgba(196, 196, 196, 0.00)] to-25%">
        
        <Link className="flex items-center gap-[14px] mt-[50px] justify-center" to='/'>
        <IconLogo />
        <h1 className="text-[28px] md:text-[40px] font-semibold tracking-[-1.12px]">
          Task Pro
        </h1>
      </Link>

      <div className="w-[335px] md:w-[424px] p-[24px] flex justify-center m-auto flex-col bg-[#151515] rounded-[8px]">
        <div className="flex items-center gap-[14px] mb-[40px]">
          <NavLink
            to="/register"
            className="text-[18px] font-medium tracking-[-0.36px] text-[#ffffff4c]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Registration
          </NavLink>
          <NavLink
            to="/login"
            className="text-[18px] font-medium tracking-[-0.36px] text-[#ffffff4c]"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Log In
          </NavLink>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateSchema={validateSchema}
        >
          <Form className="flex flex-col gap-3">
            <div className='flex flex-col gap-[14px]'>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="py-[14px] px-[18px] border border-solid border-[#BEDBB0] rounded-[8px] bg-transparent outline-none text-[#ffffff4c]"
            />
            <div className='relative'>
            <Field
              name="password"
              type={open ? "text" : "password"}
              placeholder="Confirm a password"
              className="py-[14px] px-[18px] border border-solid border-[#BEDBB0] rounded-[8px] bg-transparent outline-none text-[#ffffff4c] w-full"
            />
            <div className='absolute top-4 right-4 text-[#ffffff4c]'>
                {open ? <FiEyeOff className='w-[18px] h-[18px] cursor-pointer' onClick={toggle}/> : <FiEye className='w-[18px] h-[18px] cursor-pointer' onClick={toggle}/>}
            </div>
            </div>
            </div>

            <button
              type="submit"
              className="m-auto bg-[#BEDBB0] rounded-[8px] py-[14px] w-full font-medium mt-[24px]"
            >
              Log In Now
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
