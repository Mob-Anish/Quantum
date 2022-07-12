import * as displayFn from "../../Utils/displayFn";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const moreOptions = () => {
  return (
    <div
      className="section_continue_more_options"
      style={{
        marginTop: "5rem",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "15rem",
      }}
      onClick={displayFn.displayLoginOptions}
    >
      <BsFillArrowLeftCircleFill
        style={{
          color: "#ffffff",
          fontSize: "1.8rem",
          marginRight: ".5rem",
        }}
      />
      <h2
        style={{
          color: "#ffffff",
          fontSize: "1.8rem",
        }}
      >
        More options
      </h2>
    </div>
  );
};

export default moreOptions;
