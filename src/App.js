import "./App.css";
import "./assets/font/Cairo-Bold.ttf";
import "./assets/font/Cairo-Medium.ttf";
import "./assets/font/Cairo-Regular.ttf";
import "./assets/font/Cairo-SemiBold.ttf";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CriminalCourt from "./Pages/CriminalCourt/CriminalCourt";
import ArCriminalCourt from "./Pages/ArCriminalCourt/ArCriminalCourt";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CriminalCourt />} />
          <Route
            exact
            path="/ar"
            element={<ArCriminalCourt />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
