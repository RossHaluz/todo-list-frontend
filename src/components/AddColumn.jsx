import {LiaPlusSolid} from 'react-icons/lia'
import Modal from './Modal'
import AddColumnForm from './AddColumnForm'
import { useSelector } from 'react-redux'

const AddColumn = () => {
const {theme} = useSelector(state => state.auth);

return <Modal data={<div className={`p-[7px] text-[#fff] ${theme === 'dark' && 'bg-[#fff] text-[#121212]'} ${theme === 'light' && 'bg-[#5255BC]'} ${theme === 'violet' && 'bg-[#161616]'} rounded-[8px]`}>
    <LiaPlusSolid />
 </div>} styles={`${theme === 'dark' ? 'bg-[#121212]' : 'bg-[#fff]'} mb-auto rounded-[8px] px-[14px] py-[14px] mt-[39px] min-w-[335px] h-[56px] md:w-[334px] text-white cursor-pointer font-medium tracking-[-0.28px]`} text={'Add another column'}>
<AddColumnForm/>
</Modal>
}
export default AddColumn