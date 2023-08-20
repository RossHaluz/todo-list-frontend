import {LiaPlusSolid} from 'react-icons/lia'
import Modal from './Modal'
import AddColumnForm from './AddColumnForm'
import { useSelector } from 'react-redux'

const AddColumn = () => {
const {theme} = useSelector(state => state.auth);

return <Modal data={<div className={`p-[7px] ${theme === 'dark' && 'bg-[#fff] text-[#121212]'} ${theme === 'light' && 'bg-[#161616] text-[#fff]'} ${theme === 'violet' && 'bg-[#5255BC] text-[#fff]'} rounded-[8px]`}>
    <LiaPlusSolid />
 </div>} styles={`${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#fff]'} ${theme === 'dark' ? 'text-[#fff]' : 'text-[#161616]'} text-[#161616] mb-auto rounded-[8px] px-[14px] py-[14px] mt-[39px] min-w-[335px] h-[56px] md:w-[334px] cursor-pointer font-medium tracking-[-0.28px]`} text={'Add another column'} textModal={'Add column'}>
<AddColumnForm/>
</Modal>
}
export default AddColumn