import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/auth/slice';

const Theme = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectSingleRef = useRef(null);
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.auth);

  const handleIsOpen = (e) => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handleDocumentClick = event => {
      if (
        selectSingleRef.current &&
        !selectSingleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen])

  return <div className='relative'>
    <button type="button" className={`text-[#161616]/[.80] ${theme === 'dark' && 'text-[#fff]/[.80]'} flex gap-[4px] items-center font-medium tracking-[-0.28px]`} onClick={handleIsOpen} ref={selectSingleRef}>
     Theme
    <MdKeyboardArrowDown className='min-w-[16px] h-[16px]'/>
    </button>
    {isOpen &&  <div className={`${theme === 'dark' ? 'bg-[#151515]' : 'bg-[#FCFCFC]'} z-[999] w-[100px] h-[107px] p-[18px] rounded-[8px] absolute top-[25px] left-[-20px] flex flex-col gap-[8px]`}>
      <button type='button' className={`text-[14px] tracking-[-0.28px]  ${theme === 'light' ? 'text-[#BEDBB0]' : theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]'}`}  onClick={() => dispatch(changeTheme('light'))}>Light</button>
      <button type='button' className={`text-[14px] tracking-[-0.28px] ${theme === 'dark' ? 'text-[#BEDBB0]' : theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]'}`}  onClick={() => dispatch(changeTheme('dark'))}>Dark</button>
      <button type='button' className={`text-[14px] tracking-[-0.28px] ${theme === 'violet' ? 'text-[#BEDBB0]' : theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]'}`} onClick={() => dispatch(changeTheme('violet'))}>Violet</button>
    </div>}
  </div>
}

export default Theme
