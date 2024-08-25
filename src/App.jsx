
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import Art from './pages/Art';
import Sport from './pages/Sport';
import NewsShow from "./Components/NewsShow";






function App() {
  return (
   <div>
<BrowserRouter>
<Navbar />
 <div className="flex justify-between ">
  <div className="  md:pt-[56px] hidden  md:block">
  <Sidebar />
  </div>
  

<div className=" flex-1 p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
       
   <Routes>
    <Route path="/Art" element={<Art />} />
    <Route path="/" element={<Home />} />
    <Route path="/Sport" element={<Sport />} />
    <Route path="/news/:id" element={<NewsShow  />} />
    
      </Routes>
      </div>
      </div>
      <Footer/>
      </BrowserRouter>


   </div>
  );
}

export default App;
