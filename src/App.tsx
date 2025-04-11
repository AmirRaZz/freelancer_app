import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
