import "./hero.css";
import Lottie from "lottie-react";
import coderAnimation from "../../animation/coder.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 100 }}
            src="/images/main/me.jpg"
            className="avatar"
            alt="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Hi. I’m Tayseer.
          <br /> A Web Developer.
        </h1>
        <p className="sub-title">
          I’m Tayseer, Aspiring Web Developer with a solid foundation in HTML,
          CSS, JavaScript, React.js, and Tailwindcss. Passionate about creating
          responsive, user-friendly websites and dedicated to continuous
          learning and improvement. Strong problem-solving skills and a keen eye
          for detail, with a commitment to delivering high-quality web
          solutions.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <a
            target="_blank"
            href="https://www.instagram.com/tayseer_alrahhal?igsh=MWg4NWU3dmM2bW1mOQ=="
            className="icon icon-instagram"
          ></a>
          <a
            target="_blank"
            href="https://github.com/tayseer-alrahhal"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/tayseer-alrahhal/"
            target="_blank"
            className="icon icon-linkedin"
          ></a>
        </div>

        <div className="download-cv">
          <a href="./TEYSİR-ELRAHHAL-CV.pdf" download>
            <button className="button-cv">
              <svg
                className="saveicon"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              download CV
            </button>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.6);
          }}
          className="contact-animation"
          animationData={coderAnimation}
        />
      </div>
    </section>
  );
}
