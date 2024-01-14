import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateEditPost from "./pages/CreateEditPost";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEditPost />} />
        <Route path="/:id/edit" element={<CreateEditPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
