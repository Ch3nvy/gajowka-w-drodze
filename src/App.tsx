import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome/>} />
        <Route path="/home" element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
