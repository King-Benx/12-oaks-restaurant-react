import NavBar from "./components/atoms/NavBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/atoms/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
