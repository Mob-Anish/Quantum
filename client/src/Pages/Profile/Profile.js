const Profile = () => {
  return (
    <div className="quantum__profile--container">
      <div className="profile__container--sidebar">
        <div className="logo">
          <Link to={routes.HOME} style={{ textDecoration: "none" }}>
            <span style={{ color: "#ffffff", fontSize: "2.8rem" }}>
              Quantum
            </span>
          </Link>
        </div>
        <div className="profile">
          <div className="image"></div>
          <div className="name"></div>
          <div className="tagline"></div>
        </div>
      </div>
      <div className="profile__container--main">
        <div className="title">
          <h1>Posts</h1>
        </div>
        <div className="posts">

        </div>
      </div>
    </div>
  );
};

export default Profile;
