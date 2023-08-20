import { useEffect } from "react";
import TaskListItem from "./TaskListItem";
import { getTasks } from "redux/tasks/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "redux/tasks/selectors";

const TaskList = ({id}) => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])


  return <ul className="flex flex-col gap-[8px] h-[57vh] overflow-y-auto">
    {!!tasks && tasks?.filter(item => item.column === id).map(item => <TaskListItem key={item._id} item={item}/>)}
  </ul>
}

export default TaskList
