import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/navbar";
import Bento from "./Components/bentoSection";
import "./App.css";
import About from "./Components/about";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Bento />
      <About />
    </div>
  );
}

export default App;
