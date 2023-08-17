import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import Modal from './Modal';
import icons from 'icons.svg';
import UserManuForm from './UserManuForm';

const UserMenu = () => {
const {name, avatar} = useSelector(selectUser);
const {theme} = useSelector(state => state.auth)
const avatarUser = avatar ? avatar : `${icons}#icon-user`

  return <Modal styles={'flex items-center gap-[8px] text-white'} data={<><h3 className={`text-[#161616] ${theme === 'dark' && 'text-[#fff]'}`}>{name}</h3>
    {!avatar ? <svg width='32' height='32'>
        <use href={avatarUser}></use>
      </svg> : <img src={avatarUser} alt='User avatar' width="32" height="32" className='w-[32px] h-[32px] object-cover rounded-[8px]'/>}</>} textModal={'Edit  profile'}>
        <UserManuForm/>
  </Modal>
}

export default UserMenu
