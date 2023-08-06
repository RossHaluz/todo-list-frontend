import { BiMenu } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from 'redux/sidebar/slice';

const Navigation = () => {
const dispatch = useDispatch()
const isOpenSideBar = useSelector(state => state.sidebar.isOpen)
console.log(isOpenSideBar);

  return <button type='button' className='lg:hidden' onClick={() => dispatch(openSideBar(true))}> 
    <BiMenu className='w-[24px] h-[24px] text-white'/>
  </button>
}

export default Navigation
