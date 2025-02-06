import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "./routes";


function App() {

  const router = useRoutes(routes)
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        
        {router}
      </div>
    </>
  );
}

export default App;
