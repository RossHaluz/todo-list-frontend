import { FiFilter } from 'react-icons/fi';
import AddColumn from './AddColumn';
import Columns from './Columns';
import { useSelector } from 'react-redux';
import { selectColumns } from 'redux/columns/selectors';

const Screens = ({board}) => {
  const {theme} = useSelector(state => state.auth);
  const columns = useSelector(selectColumns);

  return  <div className={`lg:flex flex-col w-full h-screen lg:w-[calc(100vw-260px)] lg:h-[calc(100vh-60px)] fixed top-[60px] right-0 ${theme === 'light' && 'bg-[#F6F6F7]'} ${theme === 'dark' && 'bg-[#1F1F1F]'} ${theme === 'violet' && 'bg-[#ECEDFD]'}`}>
  <div className='px-[20px] md:px-[32px] lg:px-[24px] py-[14px] md:py-[26px] lg:py-[24px]'>
    <div className='flex flex-col'>
    <div className='flex justify-between'>
      {board && <h1 className={`text-[18px] font-medium tracking-[-0.36px] ${theme === 'dark' ? "text-[#fff]" : "text-[#161616]"}`}>{board.title}</h1> }
    <button type='button' className={`text-[#161616]/[.80] ${theme === 'dark' && 'text-[#fff]'} flex items-center ml-auto gap-[8px]`}><FiFilter/> Filters</button>
    </div>
    <div className='flex gap-[34px] items-center w-full h-[100%] overflow-x-auto'>
      <div className={`flex ${columns?.length > 0 ? 'gap-[34px]' : 'gap-[0px]'}`}>
      <Columns/>
      {board && <AddColumn/>}
      </div>
    </div>
    </div>
    {!board && <div className="w-[100%] min-h-screen flex justify-center items-center">
<p className={`w-[335px] text-[12px] leading-[16px] tracking-[-0.24px] text-center ${theme === 'dark' ? 'text-[#ffffff7f]' : 'text-[#161616]/[.70]'}`}>
    Before starting your project, it is essential <button type='button' className={`text-[#BEDBB0] ${theme === 'violet' && "text-[#5255BC]"}`}>to create a board</button> to
    visualize and track all the necessary tasks and milestones. This board
    serves as a powerful tool to organize the workflow and ensure effective
    collaboration among team members.
  </p>
</div>}
</div>
  </div>
};

export default Screens;
