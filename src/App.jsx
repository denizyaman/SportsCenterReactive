import "./App.css";
import Bmi from "./components/Bmi";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import OurClasses from "./components/OurClasses";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Trainers from "./components/Trainers";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Info></Info>
      <OurClasses></OurClasses>
      <Bmi></Bmi>
      <Trainers></Trainers>
      <Purchase></Purchase>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
