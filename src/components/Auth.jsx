import { Link } from 'react-router-dom';
import auth_mob_1x from '../img/auth/mob/auth-mb@1x.png';
import auth_mob_2x from '../img/auth/mob/auth-mb@2x.png';
import auth_desc_1x from '../img/auth/desc/auth-desc@1x.png';
import auth_desc_2x from '../img/auth/desc/auth-desc@2x.png';
import { ReactComponent as IconLogo } from '../img/icons/icon.svg';

const Auth = () => {
  return (
    <div className="container flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-t from-[#BEDBB0] from-92.19% to-[180deg, rgba(196, 196, 196, 0.00)] to-25%">
      <img
        srcSet={`${auth_mob_1x} 124w, ${auth_mob_2x} 248w, ${auth_desc_1x} 162w, ${auth_desc_2x} 324w`}
        sizes="(max-width: 767px) 124px, (max-width: 767px) 248px, (min-width: 768px) 162px, (min-width: 768px) 324px, 100vw"
        src={auth_mob_1x}
        alt="Auth"
      />

      <div className="flex items-center gap-[14px] mt-[14px]">
        <IconLogo />
        <h1 className="text-[28px] md:text-[40px] font-semibold tracking-[-1.12px]">
          Task Pro
        </h1>
      </div>
      <p className='text-center leading-[18px] tracking-[-0.28px] mt-[24px] w-[335px] md:w-[473px]'>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>

    <div className='mt-[48px] flex flex-col gap-[14px] w-full '>
      <Link to="/register" className='bg-[#161616] rounded-[8px] text-white m-auto flex items-center justify-center font-medium tracking-[-0.28px] py-[14px] w-[335px] md:w-[344px]'>Registration</Link>
      <Link to="/login" className='flex justify-center items-center font-medium tracking-[-0.28px]'>Log In</Link>
      </div>
    </div>
  );
};

export default Auth;
