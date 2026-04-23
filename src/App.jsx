import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Report from "./components/Report";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

import { TransactionProvider } from "./context/TransactionContext";

import Form from "./components/Form";

import "./App.css";

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <div className="render">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;
