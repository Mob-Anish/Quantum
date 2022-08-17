import "./Create.css";
import * as routes from "../../Constants/routes";
import { Link } from "react-router-dom";
import { useState } from "react";

const createOne = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="quantum__create">
      <div className="create__header">
        <div className="quantum__logo">
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="publish__button button">
          <div className="link--button">Publish</div>
        </div>
      </div>
      <div className="create__cover__image" style={{ marginBottom: "4rem" }}>
        <label htmlFor="upload-cover">
          <div className="link--button">Add image cover</div>
        </label>
        <input
          accept="image/*"
          type={"file"}
          id="upload-cover"
          style={{ display: "none" }}
        />
      </div>
      <div className="container">
        <div className="create__title" style={{ marginBottom: "2rem" }}>
          <input
            type={"text"}
            name="title"
            className="inlinefont focus"
            placeholder="Title . . . 🖊️"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="create__description">
          <textarea
            placeholder="Come on tell the details . . . 📗"
            className="inlinefont focus"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default createOne;
