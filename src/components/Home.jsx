import AppBar from "./AppBar"
import Screens from "./Screens"
import Sidebar from "./Sidebar"

const Home = () => {
  return <div className="lg:flex">
  <Sidebar/>
  <div className="w-full">
  <AppBar/>
  <Screens/>
  </div>
  </div>
}

export default Home
