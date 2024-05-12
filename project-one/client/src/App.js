import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddBook from "./pages/AddBook";
import "./assets/sass/main.scss";
import PageNotFound from "./pages/PageNotFound";
import Explore from "./pages/Explore";
import ListBooks from "./pages/ListBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="addbook" element={<AddBook />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/listbooks" element={<ListBooks />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
