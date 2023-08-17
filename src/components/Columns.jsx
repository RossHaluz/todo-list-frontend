import { useSelector } from "react-redux";
import { selectColumns } from "redux/columns/selectors";
import ColumnItem from "./ColumnItem";
import { useParams } from "react-router-dom";

const Columns = () => {
  const {boardName} = useParams()
  const columns = useSelector(selectColumns)

  return <div className="flex flex-col">
  {boardName && <ul className="flex mt-[39px] gap-[34px] overflow-x-auto">
    {columns?.length > 0 && columns?.map(item => {
      if(item) {
        const {title, _id: id} = item;
   return <ColumnItem title={title} id={id} key={id} /> 
      } else{
        return null
      }
    })}
  </ul>}
  </div>
}

export default Columns
