import { IoIosPaper } from "react-icons/io";
import "./App.css"
import Feeder from "./Components/Feeder/Feeder"
import Sidenav from "./Components/Sidenav/Sidenav";
import Previewpage from "./Components/Previewpage/Previewpage";

function App() {
  return (
    <div className="root-container">

      <div className="partition-one">
        <div className="header">
          <IoIosPaper className="icon" />
          <h4 className="title"> RMGP - Returnable Material Gate Pass</h4>
        </div>
        <Sidenav />
      </div>

      <div className="partition-two">
        <Feeder />
        <Previewpage />
      </div>
    </div>
  )
}

export default App