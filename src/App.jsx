import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
