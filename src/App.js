import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
const App = () => (
  // <Home />
  // <NavBar />
  // <Registration />
  // <createAccount />
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Registration />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
