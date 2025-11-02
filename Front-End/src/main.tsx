import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import SuccessModal from "./SuccessModal";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Tela principal de login */}
      <Route path="/" element={<App />} />

      {/* Tela de sucesso */}
      <Route path="/success" element={<SuccessModal />} />

      {/* Qualquer rota inexistente redireciona pro login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);