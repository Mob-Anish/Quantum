import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../Actions/userActions";
import "./Profile.css";
import ProfleImg from "../../Assets/img/prof.png";
import * as routes from "../../Constants/routes";
import { cld } from "../../Utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { wordBreak, imageUrlBreak } from "../../Utils/wordBreak";
import moment from "moment";

const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const userProfileData = useSelector((state) => state.userProfile);
  const { userProfile, userStories } = userProfileData;
  console.log(userProfile, userStories);

  useEffect(() => {
    if (username) {
      dispatch(userActions.getUserProfile(username));
    }
  }, [username]);

  return (
    <div className="quantum__profile--container">
      <div className="profile__container--sidebar" style={{ padding: "2rem" }}>
        <div className="logo" style={{ marginBottom: "5rem" }}>
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="profile">
          <div className="image__holder">
            <Link to={`/${username}`}>
              <div className="shape__outer circle">
                {userProfile && !userProfile.photo && (
                  <div className="shape__inner circle word--profile">
                    {wordBreak(userProfile)}
                  </div>
                )}
                {userProfile && userProfile.photo && (
                  <img
                    src={cld
                      .image(
                        `${imageUrlBreak(userProfile && userProfile.photo)}`
                      )
                      // .image(`${imageUrlBreak(userInfo.photo)}`)
                      .resize(
                        fill().width(250).height(250).gravity(autoGravity())
                      )
                      .quality("auto")
                      .format("auto")
                      .toURL()}
                    alt="cover--image"
                    className="shape__inner circle"
                  />
                )}
              </div>
            </Link>
          </div>
          <div className="name" style={{ margin: "2rem 0 6rem 0" }}>
            <h1 className="fullname">
              <Link to={`/${username}`}>{userProfile && userProfile.name}</Link>
            </h1>
            <h2
              className="username"
              style={{ fontSize: "1.6rem", marginTop: ".5rem" }}
            >
              <Link to={`/${username}`}>
                @{userProfile && userProfile.username}
              </Link>
            </h2>
          </div>
          <div className="tagline">
            <h2 style={{ marginBottom: "1rem" }}>About Me :</h2>
            <p
              className="line-clamp-3"
              style={{ fontSize: "1.5rem", lineHeight: "1.375" }}
            >
              {userProfile && userProfile.tagline}
            </p>
          </div>
          <div className="membership__date">
            <h2 style={{ marginBottom: "1rem" }}>Joined :</h2>
            <span style={{ fontSize: "1.5rem" }}>
              📅 Member Since{" "}
              {userProfile &&
                moment(userProfile.createdat).format("MMMM Do YYYY")}
            </span>
          </div>
          <div className="email__address">
            <h2 style={{ marginBottom: "1rem" }}>Email Address :</h2>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = `mailto:${
                  userProfile && userProfile.email
                }`;
                e.preventDefault();
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>
                📭 {userProfile && userProfile.email}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="profile__container--main"
        style={{ padding: "7rem 5rem" }}
      >
        <div className="title" style={{ marginBottom: "4rem" }}>
          <h1>Stories 📃</h1>
        </div>
        <div className="posts">
          <div className="user__feed--container">
            <div className="user__feed--profile">
              <div className="feed__username--date">
                <Link to="/" className="user__feed--date">
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
            </div>
            <div
              className="user__feed--content"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div
                className="feed__content--1"
                style={{ paddingRight: "1.25rem" }}
              >
                <div className="user__feed--title">
                  <h1 style={{ fontSize: "2.5rem" }}>
                    <Link to="/" target="_blank">
                      Hello World Welcome to the Programming!!
                    </Link>
                  </h1>
                </div>
                <div
                  className="user__feed--description"
                  style={{ display: "inline-block" }}
                >
                  <p
                    className="line-clamp-3"
                    style={{
                      lineHeight: "1.375",
                    }}
                  >
                    <Link to="/" target="_blank">
                      I am an Engineering Student. I wanted to take Computer
                      Science but due to some reasons, I ended up taking
                      Electronics and Communication. But I never lost interest
                      in coding which is the reason I'm cur…
                    </Link>
                  </p>
                </div>
              </div>
              <div className="feed__content--2">
                <Link to="/" target="_blank" className="feed__content--image">
                  <img src={ProfleImg} alt="title" className="feed__image" />
                </Link>
              </div>
            </div>
            {/* <div className="user__feed--reaction"></div> */}
          </div>
          <div className="user__feed--container">
            <div className="user__feed--profile">
              <div className="feed__username--date">
                <Link to="/" className="user__feed--date">
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
            </div>
            <div
              className="user__feed--content"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <div
                className="feed__content--1"
                style={{ paddingRight: "1.25rem" }}
              >
                <div className="user__feed--title">
                  <h1 style={{ fontSize: "2.5rem" }}>
                    <Link to="/" target="_blank">
                      Hello World Welcome to the Programming!!
                    </Link>
                  </h1>
                </div>
                <div
                  className="user__feed--description"
                  style={{ display: "inline-block" }}
                >
                  <p
                    className="line-clamp-3"
                    style={{
                      lineHeight: "1.375",
                    }}
                  >
                    <Link to="/" target="_blank">
                      I am an Engineering Student. I wanted to take Computer
                      Science but due to some reasons, I ended up taking
                      Electronics and Communication. But I never lost interest
                      in coding which is the I am an Engineering Student. I
                      wanted to take Computer Science but due to some reasons, I
                      ended up taking Electronics and Communication. But I never
                      lost interest in coding which is the
                    </Link>
                  </p>
                </div>
              </div>
              <div className="feed__content--2">
                <Link to="/" target="_blank" className="feed__content--image">
                  <img src={ProfleImg} alt="title" className="feed__image" />
                </Link>
              </div>
            </div>
            {/* <div className="user__feed--reaction"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
