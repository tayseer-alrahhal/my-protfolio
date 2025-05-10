import Header from "../1-header/Header";
import Footer from "../5-footer/Footer";
import "./skills.css";

export default function Skills() {
  return (
    <div className="container">
      <Header />

      <div className="skills-section">
        <div className="skill-word">SKILLS</div>
        <div className="icons-container">
          <div className="skills-icon" data-skill="CSS3">
            <img width={"40px"} src="/skills/css-3.png" alt="CSS3" />
          </div>
          <div className="skills-icon" data-skill="HTML5">
            <img width={"40px"} src="/skills/html.png" alt="HTML5" />
          </div>
          <div className="skills-icon" data-skill="JavaScript">
            <img width={"40px"} src="/skills/js.png" alt="JavaScript" />
          </div>
          <div className="skills-icon" data-skill="Typescript">
            <img width={"40px"} src="/skills/typescript.png" alt="Typescript" />
          </div>
          <div className="skills-icon" data-skill="React">
            <img width={"40px"} src="/skills/structure.png" alt="React" />
          </div>
          <div className="skills-icon" data-skill="Next.js">
            <img width={"40px"} src="/skills/next.js.png" alt="Next.js" />
          </div>
          <div className="skills-icon" data-skill="Tailwind CSS">
            <img width={"40px"} src="/skills/Tailwind CSS.png" alt="Tailwind CSS" />
          </div>
          <div className="skills-icon" data-skill="Git">
            <img width={"40px"} src="/skills/git.png" alt="Git" />
          </div>
          {/* <div className="skills-icon" data-skill="Problem solving">
            <img width={"40px"} src="/skills/idea.png" alt="Problem solving" />
          </div> */}
        </div>
      </div>

      <div className="divider"></div>
      <Footer />
    </div>
  );
}
