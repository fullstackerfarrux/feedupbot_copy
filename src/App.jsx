import Home from "./Components/Home";
import Loading from "./Components/Loading";
import viteLogo from "/vite.svg";
import { useState } from "react";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  setTimeout(() => {
    setIsAlertVisible(true);
  }, 3000);

  return (
    <>
      {/* LOADING */}
      {/* {!isAlertVisible ? <Loading /> : <h2>hi</h2>} */}

      <Home />
    </>
  );
}

export default App;
