import DataPicker from 'react-datepicker';
import {isToday, format} from 'date-fns';
import { forwardRef } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Calendar = ({selected = new Date(), onSelect}) => {
   const formatDate = date => {
    if(isToday(date)){
        return `Today, ${format(date, 'MMMM d')}`
    }else{
        return format(date, 'EEEE, MMMM d');
    }
   }

   const ExampleCustomInput = forwardRef(({ __, onClick }, ref) => (
<button type='button' onClick={onClick} ref={ref} className='text-[#BEDBB0] font-medium tracking-[-0.28px] flex items-center'>
        <span>{formatDate(selected)}</span>
        <MdOutlineKeyboardArrowDown/>
    </button>
   ));

  return <div>
    <DataPicker 
     selected={selected}
     onChange={onSelect}
     minDate={new Date()}
     calendarStartDay={1}
     customInput={<ExampleCustomInput/>}
     calendarClassName='rounded-[8px] text-white'
    />
  </div>
}

export default Calendar
