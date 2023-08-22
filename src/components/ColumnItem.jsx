import { ReactComponent as IconEddit } from '../img/icons/pencil.svg';
import { ReactComponent as IconDelate } from '../img/icons/delate.svg';
import Modal from './Modal';
import UpdateColumnForm from './UpdateColumnForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteColumn } from 'redux/columns/operations';
import AddTask from './AddTask';
import TaskList from './TaskList';

const ColumnItem = ({title, id}) => {
const dispatch = useDispatch();
const {theme} = useSelector(state => state.auth)

const deleteColunm = (columnId) => {
    dispatch(deleteColumn(columnId))
}

  return <li className='w-[335px] flex flex-col gap-[14px] overflow-y-auto'>
   <div className={`w-full h-[56px] ${theme === 'dark' ? 'bg-[#121212] text-[#fff]' : 'bg-[#fff] text-[#161616]'} rounded-[8px] py-[18px] px-[20px]  relative`}>
    {title}

    <div className="flex gap-[16px] items-center absolute top-5 right-4">
        <Modal data={<IconEddit stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`}/>} textModal={'Edit column'} >
            <UpdateColumnForm title={title} id={id}/>
        </Modal>
    <button type='button' onClick={() => deleteColunm(id)}>
      <IconDelate stroke={`${theme === 'dark' ? '#FFFFFF80' : '#16161680'}`} />
      </button>
    </div>
    </div>
<TaskList id={id}/>
    <AddTask id={id}/>
  </li>
}

export default ColumnItem