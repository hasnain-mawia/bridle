import Sidebar from "./components/sidebar";
import Dashboard from './dashboard/page'
import Slider from "./components/Slider";


export default function Home() {
  return (
    <>
    <div className="grid grid-cols-[20%_Auto] m-0">
    <div><Sidebar/></div>
    <div><Slider/> <Dashboard/></div>
    </div>
    </>
  );
}
