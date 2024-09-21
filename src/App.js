import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import LivingRoom from "./Page/LivingRoom";
import BedRoom from "./Page/BedRoom";
import BathRooms from "./Page/BathRooms";
import Closets from "./Page/Closets";
import Kitchens from "./Page/Kitchens";
import { Navbar } from "./components/Navbar/Navbar";
import { Advert } from "./components/Advert/Advert";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Advert />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="livingroom" element={<LivingRoom />} />
        <Route path="bedroom" element={<BedRoom />} />
        <Route path="bathroom" element={<BathRooms />} />
        <Route path="closet" element={<Closets />} />
        <Route path="kitchen" element={<Kitchens />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
