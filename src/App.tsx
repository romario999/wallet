import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsList from "./pages/TransactionsList";
import TransactionDetail from "./pages/TransactionDetail";

function App() {

  return (
    <Router>
      <div className="bg-[#f2f2f6] min-h-screen">
      <Routes>
          <Route path="/" element={<TransactionsList />} />
          <Route path="/transaction/:id" element={<TransactionDetail />} /> 
        </Routes>
      </div>   
    </Router>
  )
}

export default App
