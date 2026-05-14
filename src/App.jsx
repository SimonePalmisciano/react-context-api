import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import LayoutPagina from "./layouts/LayoutPagina";
import PaginaProdotto from "./pages/PaginaProdotto";
import { BudgetProvider } from "./contexts/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>

          <Route Component={LayoutPagina}>
            <Route index element={<HomePage />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
            <Route path="prodotti" element={<Prodotti />} />
            <Route path="prodotto/:productId" element={<PaginaProdotto />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}

export default App;