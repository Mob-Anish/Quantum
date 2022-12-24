import ProfleImg from "../../Assets/img/prof.png";

const Feed = () => {
  return (
    <div className="quantum__feed">
      <div className="user__feed">
        <div className="user__feed--profile">
          <img
            src={ProfleImg}
            alt="profile--icon"
            style={{
              height: "4.7rem",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="user__feed--content"></div>
        {/* <div className="user__feed--reaction"></div> */}
      </div>
    </div>
  );
};

export default Feed;
