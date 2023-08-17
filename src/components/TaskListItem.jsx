// import { format } from 'date-fns';
import icons from '../icons.svg';

const TaskListItem = ({item}) => {
const {title, desc, priority, deadline } = item;
let colorPrioriry = null;
let borderColor = null;
const shouldNotification = new Date(deadline).getDate() === new Date().getDate();

switch(priority) {
  case 'High':
   colorPrioriry = 'bg-[#BEDBB0]'
   borderColor = '[#BEDBB0]'
   break;
   case 'Medium': 
   colorPrioriry = 'bg-[#E09CB5]'
   borderColor = '[#E09CB5]'
   break;
   case 'Low':
    colorPrioriry = 'bg-[#8FA1D0]'
    borderColor = '[#8FA1D0]'
    break;
   case 'Without priority': 
   colorPrioriry = 'bg-[#ffffff]/[.30]'
   borderColor = '[#ffffff4d]'
   break;
   default:
    return;
}


const getMonth = new Date(deadline).getMonth() + 1;
const getDay = new Date(deadline).getDate();
const getYear = new Date(deadline).getFullYear();


  return <li className={`py-[14px] px-[24px] bg-[#121212] rounded-[8px] flex flex-col gap-[14px] border-l-4 border-${borderColor}`}>
    <div className="flex flex-col gap-[8px]">
    <h2 className='text-white font-semibold tracking-[-0.28px]'>{title}</h2>
    <p className="text-[12px] text-[#ffffff]/[.50] tracking-[-0.24px] leading-[16px]">{desc}</p>
    </div>
    <div className="w-full h-[1px] bg-[#ffffff]/[.10]"></div>

    <div className='flex justify-between items-center'>
      <div className="flex items-center gap-[14px]">
        <div className="flex flex-col gap-[4px]">
        <span className="text-[8px] text-[#ffffff]/[.50] tracking-[-0.16px]">Priority</span>
        <div className='flex gap-[4px] items-center'>
        <div className={`w-[14px] h-[14px] rounded-[50%] ${colorPrioriry}`}></div>
        <span className="text-white text-[12px] tracking-[-0.2px]">{priority}</span>
        </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <span className="text-[8px] text-[#ffffff]/[.50] tracking-[-0.16px]">Deadline</span>
          <span className="text-white text-[12px] tracking-[-0.2px]">{`${getMonth}/${getDay >= 10 ? getDay : `0${getDay}`}/${getYear}`}</span>
        </div>
      </div>

      <div className='flex items-center gap-[12px]'>
        <svg width='16' height='16' className={shouldNotification ? 'opacity-1' : 'opacity-0'}>
          <use href={`${icons}#card-icon2`}></use>
        </svg>
        <div className='flex gap-[8px] items-center'>
        <svg width='16' height='16' className='opacity-[0.5]'>
          <use href={`${icons}#card-icon1`}></use>
        </svg>
        <svg width='16' height='16' className='opacity-[0.5]'>
          <use href={`${icons}#card-icon3`}></use>
        </svg>
        <svg width='16' height='16' className='opacity-[0.5]'>
          <use href={`${icons}#card-icon4`}></use>
        </svg>
        </div>
      </div>
    </div>
  </li>
}

export default TaskListItem
