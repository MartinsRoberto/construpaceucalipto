import { Outlet } from "react-router-dom"
import './App.css'
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import WhatsApp from "./components/WhatsApp/WhatsApp"

const App = () => {
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
