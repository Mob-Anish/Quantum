import "./Settings.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../Actions/userActions";
import * as postActions from "../../Actions/postActions";
import * as activeConstants from "../../Constants/activeConstants";
import * as postConstants from "../../Constants/postConstants";
import { validation } from "../../Utils/formValidation";
import FadeLoader from "react-spinners/FadeLoader";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { cld } from "../../Utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { imageUrlBreak } from "../../Utils/wordBreak";
import * as imageUrlService from "../../Services/imageUrl";

const Settings = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [tagline, setTagline] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uiError, setUiError] = useState("");
  const dispatch = useDispatch();

  const imageCoverData = useSelector((state) => state.postImageCover);
  const { imageUrl, imageId, imageCoverError } = imageCoverData;

  const userLoginData = useSelector((state) => state.userLogin);
  const { userInfo, success } = userLoginData;
  const userInfoData = useSelector((state) => state.userInfo);
  const { error } = userInfoData;
  const activeUiData = useSelector((state) => state.activeUI);

  const activeProfileSettings = () => {
    dispatch({ type: activeConstants.ACTIVE_PROFILE_SETTINGS });
  };

  const activeAccount = () => {
    dispatch({ type: activeConstants.ACTIVE_ACCOUNT });
  };

  useEffect(() => {
    if (userInfo) {
      dispatch({ type: activeConstants.ACTIVE_PROFILE_SETTINGS });
    }

    if (imageCoverError) {
      setUploadError(imageCoverError.message);
      setLoading(false);
      setTimeout(() => setUploadError(""), 4000);
      dispatch({ type: postConstants.UPLOAD_IMAGE_RESET });
    }
  }, [userInfo, imageCoverError]);

  useEffect(() => {
    if (userInfo || success) {
      setFullName(userInfo.name);
      setUserName(userInfo.username);
      setTagline(userInfo.tagline);
    }
  }, [userInfo, success]);

  const uploadImage = (e) => {
    const fileData = e.target.files[0];
    const formData = new FormData();
    formData.append("file", fileData);
    dispatch(postActions.imageCoverUpload(formData));
    setLoading(true);
  };

  const removeImage = () => {
    if (imageUrlService.getImageUrl()) {
      dispatch(userActions.deleteProfImage(userInfo));
    }
    dispatch(postActions.removeImageCover(imageId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, email } = userInfo;

    // Form validation
    const errors = validation(fullName, userName, email);
    if (errors) {
      setUiError(errors);
      return setTimeout(() => setUiError(""), 2500);
    }

    dispatch(
      userActions.updateUserInfo(
        fullName,
        userName,
        email,
        tagline ? tagline : null,
        imageUrl ? imageUrl : null,
        id
      )
    );
  };

  return (
    <div className="quantum__settings_--container">
      <div className="settings__navbar" style={{ padding: "2rem" }}>
        <div className="logo" style={{ marginBottom: "4rem" }}>
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <h2 style={{ fontSize: "2.3rem", marginBottom: "3rem" }}>
          User Settings 🧑‍🔧
        </h2>
        <div className="navbar__links">
          <ul>
            <li
              className={
                activeUiData.activeProfileSetting ? "navbar__active" : ""
              }
              onClick={activeProfileSettings}
            >
              <div className="navbar__feed">
                <span>🙍 &nbsp; &nbsp;Profile Settings</span>
              </div>
            </li>
            <li
              className={activeUiData.activeAccount ? "navbar__active" : ""}
              onClick={activeAccount}
            >
              <div className="navbar__explore">
                <span>⚙️ &nbsp; &nbsp;Account</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="settings__main" style={{ padding: "7rem 5rem" }}>
        <div className="title" style={{ marginBottom: "4rem" }}>
          {activeUiData.activeProfileSetting && <h1>Basic Info 📃</h1>}
          {activeUiData.activeAccount && (
            <h1 style={{ color: "rgb(236, 102, 102)" }}>Delete Account 🙍</h1>
          )}
        </div>
        {activeUiData.activeProfileSetting && (
          <div className="profile__form" style={{ display: "flex" }}>
            <form className="profile__form__field" onSubmit={handleSubmit}>
              <div>
                <div className="input__field">
                  <label htmlFor="fullname">Full Name *</label>
                  <input
                    type={"text"}
                    name="fullname"
                    className="inlinefont focus"
                    placeholder="Write your name . . ."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <div className="error-field">
                    {name
                      ? "Changing name will make your gmail useless 😅"
                      : ""}
                    {uiError && uiError.fullName}
                  </div>
                </div>
                <div className="input__field">
                  <label htmlFor="username">User Name</label>
                  <input
                    type={"text"}
                    name="username"
                    className="inlinefont focus"
                    placeholder="Pick your username . . ."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div className="error-field">
                    {uiError && uiError.userName}
                    {error && error.username}
                  </div>
                </div>
                <div className="input__field">
                  <label htmlFor="emailaddress">Email Address</label>
                  <span
                    className="text--color privacy--policy"
                    style={{ marginBottom: "1rem", width: "35rem" }}
                  >
                    Changing your email address might break your OAuth sign-in
                    if your social media accounts do not use the same email
                    address.
                  </span>
                  <input
                    type={"text"}
                    name="emailaddress"
                    className="inlinefont focus"
                    placeholder="Email Address ..."
                    value={userInfo.email}
                    readOnly
                  />
                </div>
                <div className="input__field tagline--field">
                  <label htmlFor="tagline">Profile Tagline:</label>
                  <input
                    type={"text"}
                    name="tagline"
                    className="inlinefont focus"
                    placeholder="Software Developer, FullStack Developer . . ."
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                  />
                </div>
              </div>
              <div className="button">
                <button type="submit" className="link--button">
                  Update
                </button>
              </div>
            </form>
            <div className="profile__upload" style={{ marginBottom: "4rem" }}>
              {userInfo && userInfo.photo !== null && (
                <div style={{ display: "flex" }}>
                  <div className="test--image">
                    <a href={userInfo.photo} target="_blank" rel="noreferrer">
                      <img
                        src={cld
                          .image(`${imageUrlBreak(userInfo.photo)}`)
                          // .image(`${imageUrlBreak(userInfo.photo)}`)
                          .resize(
                            fill()
                              .width(2500)
                              .height(2500)
                              .gravity(autoGravity())
                          )
                          .quality("auto")
                          .format("auto")
                          .toURL()}
                        alt="cover--image"
                        className="prof--image"
                      />
                    </a>
                  </div>
                  <RiDeleteBack2Fill
                    onClick={removeImage}
                    style={{ fontSize: "2.5rem", cursor: "pointer" }}
                  />
                </div>
              )}
              {userInfo &&
                userInfo.photo === null &&
                (imageUrl ? (
                  <div style={{ marginBottom: "1rem", display: "flex" }}>
                    <a href={imageUrl} target="_blank" rel="noreferrer">
                      <img
                        src={cld
                          .image(`${imageUrlBreak(imageUrl)}`)
                          // .image(`${imageUrlBreak(userInfo.photo)}`)
                          .resize(
                            fill()
                              .width(2500)
                              .height(2500)
                              .gravity(autoGravity())
                          )
                          .quality("auto")
                          .format("auto")
                          .toURL()}
                        alt="cover--image"
                        className="prof--image"
                      />
                    </a>
                    <RiDeleteBack2Fill
                      onClick={removeImage}
                      style={{ fontSize: "2.5rem", cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <label
                      htmlFor="upload-profile"
                      style={{ marginRight: "5rem" }}
                    >
                      <div className="upload__profile--button">
                        <div>🤞</div>
                        <div>Upload Photo</div>
                      </div>
                    </label>
                    <input
                      accept="image/*"
                      type={"file"}
                      id="upload-profile"
                      style={{ display: "none" }}
                      onChange={(e) => uploadImage(e)}
                    />
                    <FadeLoader color={"#ffffff"} loading={loading} size={50} />
                    {uploadError && (
                      <div className="error-field">{uploadError}</div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
        {activeUiData.activeAccount && (
          <>
            <div>
              <p style={{ fontSize: "1.6rem", marginBottom: "3rem" }}>
                Your personal data will be deleted permanently when you delete
                your account on Quantum. This action is irreversible.
              </p>
              <div className="button">
                <button type="submit" className="delete--button">
                  Delete Your Account
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
