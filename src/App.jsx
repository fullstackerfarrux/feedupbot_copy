import Home from "./Components/Home";
import Lavash from "./Components/Lavash";
import Loading from "./Components/Loading";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  setTimeout(() => {
    setIsAlertVisible(true);
  }, 3000);

  return (
    <>
      {/* LOADING */}
      {/* {!isAlertVisible ? <Loading /> : <h2>hi</h2>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lavash" element={<Lavash />} />
      </Routes>
    </>
  );
}

export default App;
