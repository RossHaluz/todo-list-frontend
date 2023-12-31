import { FiFilter } from 'react-icons/fi';
import AddColumn from './AddColumn';
import Columns from './Columns';
import { useSelector } from 'react-redux';
import { selectColumns } from 'redux/columns/selectors';
import Modal from './Modal';
import Filter from './Filter';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragTasks } from 'redux/tasks/operations';
import { useDispatch } from 'react-redux';
import { dragAndDropTaks } from 'redux/columns/slice';
import { BoardContainer, WrrappColumns } from './Screens.styled';
import { bgc } from 'source/bgc';
import { useParams } from 'react-router-dom';

const Screens = ({board}) => {
  const {theme} = useSelector(state => state.auth);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();
  const params = Object.keys(useParams());


  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return; // Item was dropped outside a droppable area
    }
  
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return; // Item was dropped in the same position
    }
  
    const sourceColumnIndex = columns.findIndex(item => item._id === source.droppableId);
    const destinationColumnIndex = columns.findIndex(item => item._id === destination.droppableId);
  
    // Copy the source and destination columns' tasks
    const sourceColumn = [...columns[sourceColumnIndex].tasks];
    const destinationColumn = [...columns[destinationColumnIndex].tasks];

    // Remove the item from the source column
    const [draggedItem] = sourceColumn.splice(source.index, 1);

    // Insert the item into the destination column
    if(source.droppableId === destination.droppableId){
      sourceColumn.splice(destination.index, 0, draggedItem);
    }else{
      destinationColumn.splice(destination.index, 0, draggedItem);
    }
  
    // Update the columns' tasks
    const updatedColumns = [...columns];
      updatedColumns[sourceColumnIndex] = {
        ...updatedColumns[sourceColumnIndex],
        tasks: sourceColumn,
      };
  
      if(destination.droppableId !== source.droppableId){
      updatedColumns[destinationColumnIndex] = {
        ...updatedColumns[destinationColumnIndex],
        tasks: destinationColumn,
      };
    }

  
    // Dispatch the updated columns
    dispatch(dragAndDropTaks({
      updatedColumns,
      columnId: destination.droppableId,
      taskId: draggedItem,
    }));

    dispatch(dragTasks({
      taskId: draggedItem,
      columnId: destination.droppableId,
      indexFrom: source.index,
      indexTo: destination.index
    }))
  };


  const bgImg = () => {
    if(board?.background){
     const result =  bgc.find(item => item.bgname === board.background);
     return result
    }
  }

  return  <BoardContainer className={`lg:flex flex-col w-full h-screen lg:w-[calc(100vw-260px)] lg:h-[calc(100vh-60px)] fixed top-[60px] right-0 ${theme === 'light' && 'bg-[#F6F6F7]'} ${theme === 'dark' && 'bg-[#1F1F1F]'} ${theme === 'violet' && 'bg-[#ECEDFD]'}`} backgroundImg={bgImg()}>
  <div className='px-[20px] md:px-[32px] lg:px-[24px] py-[14px] md:py-[26px] lg:py-[24px]'>
    <div className='flex flex-col'>
    <div className='flex justify-between mt-2'>
      {board && <h1 className={`text-[18px] font-medium tracking-[-0.36px] ${board?.background !== 'empty' && 'text-white'} ${theme === 'dark' ? "text-[#fff]" : "text-[#161616]"}`}>{board.title}</h1>}
      <Modal styles={`text-[#161616]/[.80] ${theme === 'dark' && 'text-[#fff]'} flex item-center gap-[8px] ml-auto ${board?.background !== 'empty' && 'text-white'} ${params.length === 0 && 'hidden'}`} data={<><FiFilter/> Filters</>} textModal={'Filter'}>
        <Filter/>
      </Modal>
    </div>
    <WrrappColumns className={`flex gap-[34px] items-center w-full h-[100%] overflow-x-auto scrollbar ${theme === 'violet' && 'scrollbar-track-[#FFFFFF] scrollbar-thumb-[#B8BCFD]'} ${theme === 'light' && ' scrollbar-track-[#FFF] scrollbar-thumb-[#E8E8E8]'} ${theme === 'dark' && 'scrollbar-track-[#161616] scrollbar-thumb-[#ffffff]/[.10]'}`}>
      <div className={`flex ${columns?.length > 0 ? 'gap-[34px]' : 'gap-[0px]'}`}>
      <DragDropContext onDragEnd={onDragEnd}>
      <Columns/>
      </DragDropContext>
      {board && <AddColumn/>}
      </div>
    </WrrappColumns>
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
  </BoardContainer>
};

export default Screens;
