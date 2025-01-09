import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import App from "./App";
import HomePage from "./pages/HomePage";
import PlaygroundPage from "./pages/PlaygroundPage";
import ProductListPage from "./pages/ProductListPage";
import AdminLayout from "./pages/admin/AdminLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import NewProductPage from "./pages/admin/NewProductPage";
import EditProductPage from "./pages/admin/EditProductPage";
import AdminProductListPage from "./pages/admin/ProductListPage.tsx";
import TermsAndConditions from "./components/TermsAndConditions.tsx";


axios.defaults.baseURL = "http://localhost:3000";

const router = createBrowserRouter(routes);

console.log("router", router);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="playground" element={<PlaygroundPage />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="admin/products" element={<AdminProductListPage />} />
          <Route path="admin/products/new" element={<NewProductPage />} />
          <Route path="admin/products/:id/edit" element={<EditProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
