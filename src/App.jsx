import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import Header from "./components/Header/Header";
import './App.css';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main id="content" className="m-start bg-green-light">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default App;
