import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
//lazy components
const Dashboard = lazy(() => import("./pages/dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customer = lazy(() => import("./pages/customers"));
const Products = lazy(() => import("./pages/products"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Transactions />} />
          <Route path="/admin/transaction" element={<Customer />} />
          <Route path="/admin/product" element={<Products />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
