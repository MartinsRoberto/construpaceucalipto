import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from "./components/Footer/footer";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import Header from "./components/Header/Header";
import './App.css';

const App = () => {
  const { pathname } = useLocation();
  const [activatedCookies, setActivatedCookies] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let cookies = localStorage.getItem("cookies");
    console.log(cookies);

    if (cookies) {
      setActivatedCookies(true);
    }
  }, []);

  const handleCookies = () => {
    localStorage.setItem("cookies", true);
    setActivatedCookies(true);
  };

  return (
    <>
      {!activatedCookies && (
        <div className="cookies">
          <p className="mb-2 mb-lg-0 text-center">Nosso site utiliza cookies para aprimorar sua experiência de navegação.</p>
          <button className="btn btn-danger" onClick={handleCookies}>Prosseguir</button>
        </div>
      )}

      <Header />
      <main className="m-start bg-green-light">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default App;
