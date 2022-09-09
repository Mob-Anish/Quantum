import "./Create.css";
import * as routes from "../../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import * as postActions from "../../Actions/postActions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { validation } from "../../Utils/storyValidation";

const createOne = () => {
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uiError, setUiError] = useState("");
  const dispatch = useDispatch();

  const imageCoverData = useSelector((state) => state.postImageCover);
  const { imageUrl, imageId, imageCoverError } = imageCoverData;

  useEffect(() => {
    if (imageCoverError) {
      setUploadError(imageCoverError.message);
      setLoading(false);
      setTimeout(() => setUploadError(""), 4000);
    }
  }, [imageCoverError]);

  const uploadImage = (e) => {
    const fileData = e.target.files[0];
    const formData = new FormData();
    formData.append("file", fileData);
    dispatch(postActions.imageCoverUpload(formData));
    setLoading(true);
  };

  const removeImage = () => {
    dispatch(postActions.removeImageCover(imageId));
    setLoading(false);
  };

  const handleSubmit = () => {
    console.log(title, description);
    const errors = validation(title, description);
    if (errors) setUiError(errors);
    setTimeout(() => setUiError(""), 2500);
  };

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
          <div className="submit--button" onClick={handleSubmit}>
            Publish 🖨️
          </div>
        </div>
      </div>
      {imageUrl ? (
        <div className="cover__image__bg" style={{ marginBottom: "1rem" }}>
          <img
            src={imageUrl}
            alt="cover--image"
            style={{ height: "24rem", width: "25rem", borderRadius: "2rem" }}
          />
          <RiDeleteBack2Fill
            className="cut__cover__image"
            onClick={removeImage}
          />
        </div>
      ) : (
        <div className="create__cover__image" style={{ marginBottom: "4rem" }}>
          <label htmlFor="upload-cover" style={{ marginRight: "5rem" }}>
            <div className="submit--button">Add image cover 📔</div>
          </label>
          <input
            accept="image/*"
            type={"file"}
            id="upload-cover"
            style={{ display: "none" }}
            onChange={(e) => uploadImage(e)}
          />
          <FadeLoader color={"#ffffff"} loading={loading} size={50} />
          {uploadError ? <div className="error-field">{uploadError}</div> : ""}
        </div>
      )}
      <div className="create__container">
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
          <div className="error-field" style={{ textAlign: "center" }}>
            {uiError ? uiError.title : ""}
          </div>
        </div>
        <div className="create__description" style={{ marginBottom: "2rem" }}>
          <textarea
            placeholder="Come on tell the details . . . 📗"
            className="inlinefont focus"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="error-field" style={{ textAlign: "center" }}>
            {uiError ? uiError.description : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default createOne;
