import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Destination from "./components/Destination/Destination.jsx";
import Technology from "./components/Technology/Technology.jsx";
import Crew from "./components/Crew/Crew.jsx";
import Navbar from "./components/Navbar";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function App() {
  return (
    <main className=" text-white bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}
