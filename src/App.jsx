import { Routes, Route } from "react-router-dom";
import PublicHome from "./components/PublicHome/PublicHome";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />

      
    </Routes>
  );
}

export default App;
