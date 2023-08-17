import {  Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selectors";
import icons from 'icons.svg'
import { BiPlus } from "react-icons/bi";
import { useRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { updateUser } from "redux/auth/operation";

const UserManuForm = () => {
const {avatar, name, email, password} = useSelector(selectUser)
const [open, setOpen] = useState(false);
const [selectedFile, setSelectedFile] = useState(null);
const dispatch = useDispatch();

const toggle = () => {
    setOpen(!open)
}

const handleChange = e => {
  const file = e.target.files[0];
  setSelectedFile(file);
}
 
const fileRef = useRef(null);

  const initialValues = {
    name: name,
    email: email,
    password: '',
  }

  const onSubmit  = (value, {resetForm}) => {

    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('email', value.email);
    if(password.trim() !== ''){
      formData.append('password', value.password);
    }
    if(selectedFile){
      formData.append('avatar', selectedFile)
    }
  
    dispatch(updateUser(formData))
    resetForm()
  }

  return <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  >
      <Form className="flex flex-col  justify-center items-center w-full mt-[24px]">
      <div className="relative flex flex-col justify-center items-center mb-[25px]">
        {selectedFile ? <img src={URL.createObjectURL(selectedFile)} alt="User avatar" className="w-[68px] h-[68px] object-cover rounded-[8px] overflow-hidden" /> : <img src={avatar ? avatar : `${icons}#icon-user`} alt="User avatar" className="w-[68px] h-[68px] object-cover rounded-[8px] overflow-hidden" />}
      <input type="file" className="hidden" ref={fileRef} onChange={handleChange}/>
      <button type="button" className="bg-[#BEDBB0] rounded-[8px] w-[24px] h-[24px] p-[7px] text-[#161616] flex justify-center items-center absolute bottom-[-10px]" onClick={() => {fileRef.current.click()}}>
        <BiPlus className="w-[10px] h-[10px]"/>
      </button>
      </div>
      <div className="flex flex-col gap-[14px] w-full">
      <Field type="text" name="name" className="w-full bg-[#1F1F1F] border border-solid border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-none"/>
      <Field type="email" name="email" className="w-full bg-[#1F1F1F] border border-solid border-[#BEDBB0] rounded-[8px] py-[14px] px-[18px] text-white tracking-[-0.28px] outline-none"/>
      <div className='relative'>
            <Field
              name="password"
              type={open ? "text" : "password"}
              placeholder="Create a new password"
              className="py-[14px] px-[18px] border border-solid border-[#BEDBB0] rounded-[8px] bg-transparent outline-none text-[#ffffff4c] w-full"
            />
            <div className='absolute top-4 right-4 text-[#ffffff4c]'>
                {open ? <FiEyeOff className='w-[18px] h-[18px] cursor-pointer' onClick={toggle}/> : <FiEye className='w-[18px] h-[18px] cursor-pointer' onClick={toggle}/>}
            </div>
            </div>
      </div>

      <button type="submit" className="bg-[#BEDBB0] rounded-[8px] w-full py-[14px] px-[14px] text-[#161616] font-medium tracking-[-0.28px] mt-[24px]">Edit</button>
    </Form>
  </Formik>
}

export default UserManuForm
