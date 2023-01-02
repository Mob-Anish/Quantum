import "./Feed.css";
import ProfleImg from "../../Assets/img/prof.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="quantum__feed">
      <div className="user__feed">
        <div className="user__feed--container">
          <div className="user__feed--profile">
            <Link to="/" className="feed__img">
              <img
                src={ProfleImg}
                alt="profile--icon"
                style={{
                  height: "4.9rem",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <div className="feed__name--username">
              <Link to="/" className="user__feed--name">
                <h3 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>
                  Hinata Shoyo
                </h3>
              </Link>
              <div className="feed__username--date">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  <span
                    className="user__feed--username"
                    style={{ fontSize: "1.5rem" }}
                  >
                    @Shoyo
                  </span>
                </Link>
                <span style={{ fontWeight: "700" }}>.</span>
                <Link
                  to="/"
                  className="user__feed--date"
                  style={{ marginLeft: "1rem" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
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
                  style={{
                    lineHeight: "1.375",
                    wordBreak: "normal",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Link to="/" target="_blank">
                    I am an Engineering Student. I wanted to take Computer
                    Science but due to some reasons, I ended up taking
                    Electronics and Communication. But I never lost interest in
                    coding which is the reason I'm cur…
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
            <Link to="/" className="feed__img">
              <img
                src={ProfleImg}
                alt="profile--icon"
                style={{
                  height: "4.9rem",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <div className="feed__name--username">
              <Link to="/" className="user__feed--name">
                <h3 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>
                  Hinata Shoyo
                </h3>
              </Link>
              <div className="feed__username--date">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  <span
                    className="user__feed--username"
                    style={{ fontSize: "1.5rem" }}
                  >
                    @Shoyo
                  </span>
                </Link>
                <span style={{ fontWeight: "700" }}>.</span>
                <Link
                  to="/"
                  className="user__feed--date"
                  style={{ marginLeft: "1rem" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
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
                  <Link to="/">Hello World Welcome to the Programming!!</Link>
                </h1>
              </div>
              <div
                className="user__feed--description"
                style={{ display: "inline-block" }}
              >
                <p
                  style={{
                    lineHeight: "1.375",
                    wordBreak: "normal",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Link to="/" style={{ display: "block" }}>
                    I am an Engineering Student. I wanted to take Computer
                    Science but due to some reasons, I ended up taking
                    Electronics and Communication. But I never lost interest in
                    coding which is the reason I'm cur…
                  </Link>
                </p>
              </div>
            </div>
            <div className="feed__content--2">
              <Link to="/" className="feed__content--image">
                <img src={ProfleImg} alt="title" className="feed__image" />
              </Link>
            </div>
          </div>
          {/* <div className="user__feed--reaction"></div> */}
        </div>
        <div className="user__feed--container">
          <div className="user__feed--profile">
            <Link to="/" className="feed__img">
              <img
                src={ProfleImg}
                alt="profile--icon"
                style={{
                  height: "4.9rem",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <div className="feed__name--username">
              <Link to="/" className="user__feed--name">
                <h3 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>
                  Hinata Shoyo
                </h3>
              </Link>
              <div className="feed__username--date">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  <span
                    className="user__feed--username"
                    style={{ fontSize: "1.5rem" }}
                  >
                    @Shoyo
                  </span>
                </Link>
                <span style={{ fontWeight: "700" }}>.</span>
                <Link
                  to="/"
                  className="user__feed--date"
                  style={{ marginLeft: "1rem" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
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
                  <Link to="/">Hello World Welcome to the Programming!!</Link>
                </h1>
              </div>
              <div
                className="user__feed--description"
                style={{ display: "inline-block" }}
              >
                <p
                  style={{
                    lineHeight: "1.375",
                    wordBreak: "normal",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Link to="/" style={{ display: "block" }}>
                    I am an Engineering Student. I wanted to take Computer
                    Science but due to some reasons, I ended up taking
                    Electronics and Communication. But I never lost interest in
                    coding which is the reason I'm cur…
                  </Link>
                </p>
              </div>
            </div>
            <div className="feed__content--2">
              <Link to="/" className="feed__content--image">
                <img src={ProfleImg} alt="title" className="feed__image" />
              </Link>
            </div>
          </div>
          {/* <div className="user__feed--reaction"></div> */}
        </div>
        <div className="user__feed--container">
          <div className="user__feed--profile">
            <Link to="/" className="feed__img">
              <img
                src={ProfleImg}
                alt="profile--icon"
                style={{
                  height: "4.9rem",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <div className="feed__name--username">
              <Link to="/" className="user__feed--name">
                <h3 style={{ fontSize: "1.6rem", marginBottom: ".5rem" }}>
                  Hinata Shoyo
                </h3>
              </Link>
              <div className="feed__username--date">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  <span
                    className="user__feed--username"
                    style={{ fontSize: "1.5rem" }}
                  >
                    @Shoyo
                  </span>
                </Link>
                <span style={{ fontWeight: "700" }}>.</span>
                <Link
                  to="/"
                  className="user__feed--date"
                  style={{ marginLeft: "1rem" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>Dec 26, 2022</span>
                </Link>
              </div>
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
                  <Link to="/">Hello World Welcome to the Programming!!</Link>
                </h1>
              </div>
              <div
                className="user__feed--description"
                style={{ display: "inline-block" }}
              >
                <p
                  style={{
                    lineHeight: "1.375",
                    wordBreak: "normal",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Link to="/" style={{ display: "block" }}>
                    I am an Engineering Student. I wanted to take Computer
                    Science but due to some reasons, I ended up taking
                    Electronics and Communication. But I never lost interest in
                    coding which is the reason I'm cur…
                  </Link>
                </p>
              </div>
            </div>
            <div className="feed__content--2">
              <Link to="/" className="feed__content--image">
                <img src={ProfleImg} alt="title" className="feed__image" />
              </Link>
            </div>
          </div>
          {/* <div className="user__feed--reaction"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
