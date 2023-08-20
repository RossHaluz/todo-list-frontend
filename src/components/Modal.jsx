import { useState } from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Modal = ({data, children, styles, text, textModal, widthModal = '335px' }) => {
const [isOpen, setIsOpen] = useState(false);
const {theme} = useSelector(state => state.auth);

const openModal = () => {
  setIsOpen(true)
}


  const onCloseModal = e => {
    if(e.target !== e.currentTarget) {
      return
    }

    setIsOpen(false)
  }
  

  return <>
    <button className={`cursore-pointer border-none flex items-center gap-[16px] justify-center ${styles}`} onClick={openModal}>
      {data}
      {text}
    </button>
  
    {isOpen && createPortal(<div className='fixed w-full h-full top-0 left-0 bg-[#151515]/[.50] flex justify-center items-center z-[9999]' onClick={onCloseModal}>
      <div className={`${theme === 'dark' ? 'bg-[#151515]' : 'bg-[#fff]'} rounded-[8px] p-[24px] relative flex flex-col ${textModal === 'Filter' ? 'gap-[14px]' : 'gap-[24px]'}`} style={{width: '400px'}}>
      <h2 className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} font-medium text-[18px] tracking-[-0.36px]`}>{textModal}</h2>
     {children}
          <AiOutlineClose className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} absolute top-[18.5px] right-[18.5px]`} onClick={() => setIsOpen(false)}/>
      </div>
    </div>, document.querySelector("#popup-root")
    )}
    </>
}

export default Modal