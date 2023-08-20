import { BiMenu } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from 'redux/sidebar/slice';

const Navigation = () => {
const dispatch = useDispatch();
const {theme} = useSelector(state => state.auth);

  return <button type='button' className='lg:hidden' onClick={() => dispatch(openSideBar(true))}> 
    <BiMenu className={`w-[24px] h-[24px] ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'}`}/>
  </button>
}

export default Navigation
