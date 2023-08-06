import { FiFilter } from 'react-icons/fi';
import AppBar from './AppBar';


const Screens = () => {
  return  <div className='lg:flex flex-col  w-full'>
  <AppBar/>
  <div className='px-[20px] md:px-[32px] lg:px-[24px] py-[14px] md:py-[26px] lg:py-[10px]'>
  <button type='button' className='text-white flex items-center ml-auto gap-[8px]'><FiFilter/> Filters</button>
  <div className="w-[100%] min-h-screen flex justify-center items-center">
  <p className='w-[335px] text-[12px] leading-[16px] tracking-[-0.24px] text-[#ffffff7f] text-center'>
    Before starting your project, it is essential <button type='button' className='text-[#BEDBB0]'>to create a board</button> to
    visualize and track all the necessary tasks and milestones. This board
    serves as a powerful tool to organize the workflow and ensure effective
    collaboration among team members.
  </p>
</div>
</div>
  </div>
};

export default Screens;
