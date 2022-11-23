import Navbar from "./component/Navbar";
import User from "./component/user/user";
import MeetingSchedule from "./component/meeting_schedule/index";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <User />
      <MeetingSchedule />
    </div>
  );
}

export default App;
