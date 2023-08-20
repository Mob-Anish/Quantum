import "./About.css";
import { cld } from "../../Utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const About = () => {
  return (
    <div className="quantum__about">
      <div className="about__header">
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ marginBottom: "2rem" }}>About Quantum</h1>
          <h1>
            Helping developers, and people in tech connect and share knowledge
            easily! 😃 😃
          </h1>
        </div>
        <h2 style={{ marginBottom: "2rem" }}>
          Hassle-free blogging and community experience for the creators of
          tomorrow.
        </h2>
        <div style={{ marginBottom: "2rem" }}>
          <h1>Technologies Used</h1>
        </div>
        <div>
          <h1>Creator & Developer</h1>
          <div className="creator__image">
            <a
              href="https://res.cloudinary.com/hologram/image/upload/v1689172900/QuantumImages/uqwtscs5rivwjcg7m4ef.jpg"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={cld
                  .image("QuantumImages/uqwtscs5rivwjcg7m4ef")
                  // .image(`${imageUrlBreak(userInfo.photo)}`)
                  .resize(fill().width(250).height(250).gravity(autoGravity()))
                  .quality("auto")
                  .format("auto")
                  .toURL()}
                alt="creator--image"
                className="prof--image"
              />
            </a>
          </div>
          <h3>Anish Manandhar (Shoya)</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
