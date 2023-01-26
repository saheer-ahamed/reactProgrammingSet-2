import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Grid from "./pages/Grid/grid"
import Home from "./pages/home"

export default function App() {
  const [showRowData, setShowRowData] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home setShowRowData={setShowRowData} />} />
        <Route path="/grid" exact element={<Grid showRowData={showRowData} />} />
      </Routes>
    </>
  )
}
