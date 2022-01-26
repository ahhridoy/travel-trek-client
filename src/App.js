import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App bg-blue-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
