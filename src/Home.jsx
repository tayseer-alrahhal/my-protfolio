import { useEffect, useState } from "react";
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import "./components/Spinner/Spinner";
import Spinner from "./components/Spinner/Spinner";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data loaded!" });
      setLoading(false);
    }, 2000);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
          });
        }}
        style={{ opacity: showBtn ? "1" : "0" }}
        className="scroll2Top icon-keyboard_arrow_up"
      ></button>
    </div>
  );
}

export default Home;
