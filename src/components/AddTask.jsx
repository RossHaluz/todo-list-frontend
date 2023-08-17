import { BiPlus } from "react-icons/bi";
import Modal from "./Modal";
import AddTaskForm from "./AddTaskForm";

const AddTask = ({id}) => {
  return <Modal styles={'w-[335px] flex justify-center items-center gap-[8px] py-[10px] text-[#161616] font-medium tracking-[-0.28px] bg-[#BEDBB0] rounded-[8px]'} data={<div className={`bg-[#161616] p-[7px] rounded-[8px]`}>
  <BiPlus className='text-white w-[14px] h-[14px]'/>
  </div>} text={'Add another card'}>
<AddTaskForm id={id}/>
  </Modal>

}

export default AddTask
