import { useState } from "react";
import "./main.css";
import { myProjects } from "./myPorjects";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [allProjects, setAllProjects] = useState(myProjects);

  const filterProjects = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const filteredProjects = myProjects.filter((item) => {
      // return item.cetegory === buttonCategory;
      return item.cetegory.includes(buttonCategory);
    });
    setAllProjects(filteredProjects);
  };



  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setAllProjects(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            filterProjects("CSS & HTML");
          }}
          className={currentActive === "CSS & HTML" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            filterProjects("JavaScript");
          }}
          className={currentActive === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            filterProjects("React");
          }}
          className={currentActive === "React" ? "active" : null}
        >
          React.js
        </button>
        <button
          onClick={() => {
            filterProjects("Next");
          }}
          className={currentActive === "Next" ? "active" : null}
        >
          next.js
        </button>
        <button
          onClick={() => {
            filterProjects("React & Tailwindcss");
          }}
          className={currentActive === "React & Tailwindcss" ? "active" : null}
        >
          React & Tailwindcss
        </button>
        <button
          onClick={() => {
            filterProjects("Next & Tailwindcss");
          }}
          className={currentActive === "Next & Tailwindcss" ? "active" : null}
        >
          Next & Tailwindcss
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {allProjects.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 8, type: "spring", stiffness: 65 }}
                key={item.id}
                className="card"
              >
                <img width={266} src={item.img} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 style={{ textTransform: "capitalize" }} className="title">
                    {item.title}
                  </h1>
                  <p className="sub-title">
                    {item.description}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "12px" }} className="flex">
                      <a
                        href={item.demo}
                        target="_blank"
                        className="icon-link"
                      ></a>
                      <a
                        href={item.giturl}
                        target="_blank"
                        className="icon-github"
                      ></a>
                    </div>

                    <a className="link flex" href="#">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
