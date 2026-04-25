import { BrowserRouter } from "react-router-dom"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import { AppRouter } from "../router/router"

const routerBasename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
