import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Instaladores from "./components/Instaladores/Instaladores";
import Realizadas from "./components/Realizadas/Realizadas";
import Layout from "./containers/Layout";
import "./App.css"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="realizadas" element={<Realizadas/>} />
        <Route path="instaladores" element={<Instaladores/>} />
      </Route>
    </Routes>
  );
}


