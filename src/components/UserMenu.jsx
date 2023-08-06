import { useSelector } from 'react-redux';
import avatar from '../img/avatar/user.png';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
const userName = useSelector(selectUser)

  return <button type='button' className='flex items-center gap-[8px] text-white'>
    <h3>{userName?.name}</h3>
    <img src={avatar} alt="Avatar" width='32px' height='32px' className='w-[32px] h-[32px]'/>
  </button>
}

export default UserMenu
