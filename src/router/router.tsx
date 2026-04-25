import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ServicesPage from "../pages/Services/ServicesPage"
import AtelierPage from "../pages/Atelier/AtelierPage"
import BoutiquePage from "../pages/Boutique/BoutiquePage"
import ContactPage from "../pages/Contact/ContactPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/atelier" element={<AtelierPage />} />
      <Route path="/boutique" element={<BoutiquePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
