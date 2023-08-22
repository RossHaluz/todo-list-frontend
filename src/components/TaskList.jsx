import { useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { getTasks } from "redux/tasks/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({id}) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])


  return <Droppable droppableId={id} key={id}>
    {(provided) => (
 <ul className="flex flex-col gap-[8px] h-[57vh] overflow-y-auto" {...provided.droppableProps} ref={provided.innerRef}>
 {!!tasks && tasks?.filter(item => item.column === id).map((item, index) => <TaskListItem key={item._id} item={item} index={index}/>)}
 {provided.placeholder}
</ul>
    )
  }
  </Droppable>
}

export default TaskList
