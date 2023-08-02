import avatar from '../img/avatar/user.png';

const UserMenu = () => {
  return <button type='button' className='flex items-center gap-[8px] text-white'>
    <h3>Ivetta</h3>
    <img src={avatar} alt="Avatar" width='32px' height='32px' className='w-[32px] h-[32px]'/>
  </button>
}

export default UserMenu
