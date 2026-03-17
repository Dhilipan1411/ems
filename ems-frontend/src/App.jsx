import "./App.css";
import EmployeeComponent from "./Component/EmployeeComponent";
import FooterComponent from "./Component/FooterComponent";
import HeaderComponent from "./Component/HeaderComponent";
import ListEmployeeComponent from "./Component/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/emp" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          <Route
            path="/update-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
