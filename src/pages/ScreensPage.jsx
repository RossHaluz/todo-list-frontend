import AppBar from "components/AppBar";
import Screens from "components/Screens";
import Sidebar from "components/Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBoard } from "redux/boards/operations";
import { selectBoard } from "redux/boards/selectors";
import { getColumns } from "redux/columns/operations";


const ScreensPage = () => {
  const dispatch = useDispatch();
const {boardName} = useParams();
const board = useSelector(selectBoard);

useEffect(() => {
dispatch(getBoard(boardName));
dispatch(getColumns(boardName))
}, [dispatch, boardName])

  return <div className="lg:flex">
  <Sidebar />
  <div className="w-[100%]">
    <AppBar/>
  <Screens board={board}/>
  </div>
  </div>
}

export default ScreensPage