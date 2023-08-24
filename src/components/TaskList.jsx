import { useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { getTasks } from "redux/tasks/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";
import { Droppable } from "react-beautiful-dnd";
import { Tasks } from "./TaskList.styled";

const TaskList = ({id}) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.auth);


  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])


  return <Droppable droppableId={id} key={id}>
    {(provided) => (
 <Tasks className={`flex flex-col gap-[8px] h-[45vh] lg:h-[50vh] overflow-y-auto scrollbar ${theme === 'violet' && 'scrollbar-track-[#FFFFFF] scrollbar-thumb-[#B8BCFD]'} ${theme === 'light' && ' scrollbar-track-[#E8E8E8] scrollbar-thumb-[#161616]/[.10]'} ${theme === 'dark' && ' scrollbar-track-[#ffffff]/[.50] scrollbar-thumb-[#121212]'}`} {...provided.droppableProps} ref={provided.innerRef}>
 {!!tasks && tasks?.filter(item => item.column === id).map((item, index) => <TaskListItem key={item._id} item={item} index={index}/>)}
 {provided.placeholder}
</Tasks>
    )
  }
  </Droppable>
}

export default TaskList
