import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

/* Components */
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <Navbar onButtonClick={() => setIsExpanded(true)} />
      <Menu onButtonClick={() => setIsExpanded(false)} isExpanded={isExpanded}/>
      <Carousel />
    </>
  );
}

export default App;
