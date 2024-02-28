import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <h1>Hello React Router!</h1>
      <div id="container">
        <MainSection />
      </div>
      <div id="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
