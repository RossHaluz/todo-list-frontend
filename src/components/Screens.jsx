import { FiFilter } from 'react-icons/fi';

const Screens = () => {
  return  <>
  <button type='button' className='text-white flex items-center ml-auto gap-[8px]'><FiFilter/> Filters</button>
  <div className="w-[100%] h-[100vh] flex justify-center items-center">
  <p className='w-[335px] text-[12px] leading-[16px] tracking-[-0.24px] text-[#ffffff7f] text-center'>
    Before starting your project, it is essential <button type='button' className='text-[#BEDBB0]'>to create a board</button> to
    visualize and track all the necessary tasks and milestones. This board
    serves as a powerful tool to organize the workflow and ensure effective
    collaboration among team members.
  </p>
</div>
  </>
};

export default Screens;
