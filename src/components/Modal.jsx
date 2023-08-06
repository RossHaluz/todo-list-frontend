import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({setIsOpen, children}) => {

  const onCloseModal = e => {
    if(e.target !== e.currentTarget) {
      return
    }

    setIsOpen(false)
  }

  return <div className='fixed w-full h-full top-0 left-0 bg-[#151515]/[.50] flex justify-center items-center' onClick={onCloseModal}>
    <div className='bg-[#151515] w-[335px] rounded-[8px] p-[24px] absolute'>
        {children}
        <AiOutlineClose className='text-white absolute top-[18.5px] right-[18.5px]' onClick={() => setIsOpen(false)}/>
    </div>
  </div>
}

export default Modal