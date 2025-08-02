import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

<<<<<<< HEAD
export const backend_url = "https://ecommerce-jfdt.onrender.com";
=======
export const backend_url = "https://ecommerce-jfdt.onrender.com/";
>>>>>>> 16c796b6dfbb815dbd36bfa0e199641319b3baff
export const currency = '₹';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
