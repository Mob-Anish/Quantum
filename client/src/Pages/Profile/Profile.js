import { Link, useParams } from "react-router-dom";
import "./Profile.css";
import ProfleImg from "../../Assets/img/prof.png";
import * as routes from "../../Constants/routes";

const Profile = () => {
  const { username } = useParams();
  console.log(username);

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
            <Link to="/">
              <div className="shape__outer circle">
                <div className="shape__inner circle bg-image"></div>
              </div>
            </Link>
          </div>
          <div className="name" style={{ margin: "2rem 0 6rem 0" }}>
            <h1 className="fullname">
              <Link to="/">Hinata Shoyo</Link>
            </h1>
            <h2
              className="username"
              style={{ fontSize: "1.6rem", marginTop: ".5rem" }}
            >
              <Link to="/">@Shoya</Link>
            </h2>
          </div>
          <div className="tagline">
            <h2 style={{ marginBottom: "1rem" }}>About Me :</h2>
            <p style={{ fontSize: "1.5rem", lineHeight: "1.375" }}>
              Senior Software Engineer. Google Developers Expert. Entrepreneur.
              Mountain Climber. Cat Lover. Gardener. World traveler.
            </p>
          </div>
          <div className="membership__date">
            <h2 style={{ marginBottom: "1rem" }}>Joined :</h2>
            <span style={{ fontSize: "1.5rem" }}>
              📅 Member Since Jul, 2022
            </span>
          </div>
          <div className="email__address">
            <h2 style={{ marginBottom: "1rem" }}>Email Address :</h2>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:shoyo6334@gmail.com";
                e.preventDefault();
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>📭 shoyo6334@gmail.com</span>
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
                    style={{
                      lineHeight: "1.375",
                      wordBreak: "normal",
                      overflowWrap: "anywhere",
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
                    style={{
                      lineHeight: "1.375",
                      wordBreak: "normal",
                      overflowWrap: "anywhere",
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
                    style={{
                      lineHeight: "1.375",
                      wordBreak: "normal",
                      overflowWrap: "anywhere",
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
                    style={{
                      lineHeight: "1.375",
                      wordBreak: "normal",
                      overflowWrap: "anywhere",
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
