import { Route, Routes } from "react-router-dom";
import "./App.css";
import BLogDetails from "./components/BLogDetails/BLogDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import PostBlogs from "./components/Dashboard/PostBlog/PostBlogs";
import ShowBlogs from "./components/Dashboard/ShowBlogs/ShowBlogs";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import TotalBlogs from "./components/TotalBlogs/TotalBlogs";

function App() {
    return (
        <div className="App bg-blue-100">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="totalBlogs" element={<TotalBlogs />} />
                <Route path="blogDetails/:id" element={<BLogDetails />} />
                {/* <Route path="blogPosts" element={<BlogPosts />} /> */}
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="showBlogs" element={<ShowBlogs />} />
                    <Route path="postBlogs" element={<PostBlogs />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
