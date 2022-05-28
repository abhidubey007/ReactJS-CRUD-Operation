import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blogs from "./components/pages/Blogs";
import NoPage from "./components/pages/NoPage";
import Navbar from './layout/Navbar';
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
