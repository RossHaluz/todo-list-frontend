import { useDispatch, useSelector } from 'react-redux';
import icons from '../icons.svg';
import Modal from './Modal';
import UpdateTaskForm from './UpdateTaskForm';
import { deleteTask } from 'redux/tasks/operations';
import { Draggable } from 'react-beautiful-dnd';

const TaskListItem = ({item, index}) => {
const {title, desc, priority, deadline, _id: id} = item;
const {theme} = useSelector(state => state.auth);
let colorPrioriry = null;
let borderColor = null;
const shouldNotification = new Date(deadline).getDate() === new Date().getDate();
const dispatch = useDispatch();

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


  return <Draggable draggableId={id} key={id} index={index}>
    {(provided) => (
       <li className={`py-[14px] px-[24px] ${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#fff]'} mr-[8px] rounded-[8px] flex flex-col gap-[14px] border-l-4 border-${borderColor}`}
       priority={priority}
       ref={provided.innerRef}
       {...provided.draggableProps}
       {...provided.dragHandleProps}
       >
       <div className="flex flex-col gap-[8px]">
       <h2 className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} font-semibold tracking-[-0.28px]`}>{title}</h2>
       <p className={`text-[12px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.70]'} tracking-[-0.24px] leading-[16px] line-clamp-3`}>{desc}</p>
       </div>
       <div className={`w-full h-[1px] ${theme === 'dark' ? 'bg-[#ffffff]/[.10]' : 'bg-[#161616]/[.10]'}`}></div>
   
       <div className='flex justify-between items-center'>
         <div className="flex items-center gap-[14px]">
           <div className="flex flex-col gap-[4px]">
           <span className={`text-[8px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.16px]`}>Priority</span>
           <div className='flex gap-[4px] items-center'>
           <div className={`w-[14px] h-[14px] rounded-[50%] ${colorPrioriry}`}></div>
           <span className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} text-[12px] tracking-[-0.2px]`}>{priority}</span>
           </div>
           </div>
   
           <div className="flex flex-col gap-[4px]">
             <span className={`text-[8px] ${theme === 'dark' ? 'text-[#ffffff]/[.50]' : 'text-[#161616]/[.50]'} tracking-[-0.16px]`}>Deadline</span>
             <span className={`${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} text-[12px] tracking-[-0.2px]`}>{`${getMonth}/${getDay >= 10 ? getDay : `0${getDay}`}/${getYear}`}</span>
           </div>
         </div>
   
         <div className='flex items-center gap-[12px]'>
           <svg width='16' height='16' className={shouldNotification ? 'opacity-1' : 'opacity-0'} fill='none' stroke={`${theme === 'violet' ? '#5255BC' : '#BEDBB0'}`}>
             <use href={`${icons}#card-icon2`}></use>
           </svg>
           <div className='flex gap-[8px] items-center'>
           <svg width='16' height='16' className='opacity-[0.5]' fill='none' stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`}>
             <use href={`${icons}#card-icon1`}></use>
           </svg>
           <Modal textModal={'Edit card'} data={<svg width='16' height='16' className='opacity-[0.5]' fill='none' stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`}>
             <use href={`${icons}#card-icon3`}></use>
           </svg>}>
             <UpdateTaskForm title={title} desc={desc} priority={priority} deadline={deadline} id={id}/>
           </Modal>
   
     <button type='button' onClick={() => dispatch(deleteTask(id))}>
           <svg width='16' height='16' className='opacity-[0.5] cursor-pointer' fill='none' stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`} >
             <use href={`${icons}#card-icon4`}></use>
           </svg>
           </button>
           </div>
         </div>
       </div>
     </li>
    )}
  </Draggable>
}

export default TaskListItem


