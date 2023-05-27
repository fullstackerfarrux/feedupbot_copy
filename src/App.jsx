import Loading from "./Components/Loading";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Burger from "./Components/Burger";
import Lavash from "./Components/Lavash";

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
        <Route path="/" element={<Lavash />} />
        <Route path="/burger" element={<Burger />} />
      </Routes>
    </>
  );
}

export default App;
