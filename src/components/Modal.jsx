import { useState } from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai';

const Modal = ({data, children, styles, text, textModal, widthModal = '335px' }) => {
const [isOpen, setIsOpen] = useState(false);


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
  
    {isOpen && createPortal(<div className='fixed w-full h-full top-0 left-0 bg-[#151515]/[.50] flex justify-center items-center z-[9999] text-white' onClick={onCloseModal}>
      <div className={`bg-[#151515] rounded-[8px] p-[24px] absolute`} style={{width: '400px'}}>
      <h2 className="text-white font-medium text-[18px] tracking-[-0.36px]">{textModal}</h2>
     {children}
          <AiOutlineClose className='text-white absolute top-[18.5px] right-[18.5px]' onClick={() => setIsOpen(false)}/>
      </div>
    </div>, document.querySelector("#popup-root")
    )}
    </>
}

export default Modal