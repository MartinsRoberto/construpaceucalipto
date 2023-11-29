import { Outlet, useLocation } from "react-router-dom"
import './App.css'
import Footer from "./components/Footer/footer"
import WhatsApp from "./components/WhatsApp/WhatsApp"
import { useEffect } from "react"
import Header from "./components/Header/Header"

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="m-start bg-green-light">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
