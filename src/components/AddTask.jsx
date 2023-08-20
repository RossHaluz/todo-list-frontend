import { BiPlus } from "react-icons/bi";
import Modal from "./Modal";
import AddTaskForm from "./AddTaskForm";
import { useSelector } from "react-redux";

const AddTask = ({id}) => {
const {theme} = useSelector(state => state.auth);

  return <Modal styles={`w-[335px] flex justify-center items-center gap-[8px] py-[10px]  font-medium tracking-[-0.28px] ${theme === 'violet' ? 'bg-[#5255BC] text-[#fff]' : 'bg-[#BEDBB0] text-[#161616]'} rounded-[8px]`} data={<div className={`${theme === 'violet' ? 'bg-[#fff]' : 'bg-[#161616]'} p-[7px] rounded-[8px]`}>
  <BiPlus className={`w-[14px] h-[14px] ${theme === 'violet' ? 'text-[#161616]' : 'text-[#fff]'}`}/>
  </div>} text={'Add another card'} textModal={'Add card'}>
<AddTaskForm id={id}/>
  </Modal>

}

export default AddTask
