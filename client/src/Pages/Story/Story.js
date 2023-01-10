import { Link, useParams } from "react-router-dom";
import * as routes from "../../Constants/routes";
import "./Story.css";
import ProfleImg from "../../Assets/img/prof.png";

const Story = () => {
  const { storyTitle } = useParams();
  console.log(storyTitle);

  return (
    <div className="quantum__story--container">
      <div className="logo" style={{ marginBottom: "5rem" }}>
        <Link to={routes.HOME} style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "2.8rem" }}>Quantum</span>
        </Link>
      </div>
      <div className="content__holder">
        <div className="story__title">
          <h1>Hello World Welcome to the Programming!!</h1>
        </div>
        <div className="creater__header">
          <div className="profile">
            <div className="image__holder">
              <Link to="/">
                <img
                  src={ProfleImg}
                  className="outer__circle"
                  alt="user__image"
                />
              </Link>
            </div>
            <div className="fullname" style={{ marginLeft: "2rem" }}>
              <Link to="/">
                <span style={{ fontWeight: "600" }}>Hinata Shoyo</span>
              </Link>
            </div>
          </div>
          <div className="dot" style={{ margin: "0 1rem" }}>
            .
          </div>
          <div className="date">
            <Link to="/">
              <span>Jan 10, 2023</span>
            </Link>
          </div>
        </div>
        <div className="story__description">
          <p>
            When it comes to web development, the choice between PHP and
            JavaScript is an age-old debate. Both languages have their own
            strengths and weaknesses, and the best choice for a particular
            project will depend on a variety of factors. PHP, previously known
            as Personal Homepage, now stands for Hypertext Preprocessor, is a
            server-side scripting language that is widely used for creating
            dynamic web pages and building large-scale web applications.
            Additionally, PHP has a large and active community, and a wealth of
            resources available, such as the popular frameworks Laravel,
            CodeIgniter, and Symfony, which simplify development and speed up
            the process of building applications. JavaScript, on the other hand,
            is primarily a client-side language that runs in the browser and is
            used to create interactive user interfaces and dynamic web pages.
            While JavaScript can also be used for server-side development with
            technologies like Node.js, it is primarily used for client-side
            development. JavaScript has been rapidly growing in recent years,
            with many popular frameworks like Angular, React, and Vue which are
            widely used for building complex client-side web applications,
            providing great performance, and more efficient responsive user
            interfaces. When deciding between PHP and JavaScript for a project,
            you should consider the type of project and its requirements. For
            example, if you're building a data-driven application that requires
            server-side logic and database integration, then PHP would be a good
            choice. But if you're building a complex client-side web application
            that requires a high level of interactivity and a responsive user
            interface, then JavaScript would be the better choice. When it comes
            to syntax, PHP is easier to learn for someone new to programming, as
            it has a similar structure to C, Java, and C++. JavaScript, on the
            other hand, has a different syntax, which can be steeper for someone
            who's not familiar with it.
          </p>
          <p>
            When it comes to web development, the choice between PHP and
            JavaScript is an age-old debate. Both languages have their own
            strengths and weaknesses, and the best choice for a particular
            project will depend on a variety of factors. PHP, previously known
            as Personal Homepage, now stands for Hypertext Preprocessor, is a
            server-side scripting language that is widely used for creating
            dynamic web pages and building large-scale web applications.
            Additionally, PHP has a large and active community, and a wealth of
            resources available, such as the popular frameworks Laravel,
            CodeIgniter, and Symfony, which simplify development and speed up
            the process of building applications. JavaScript, on the other hand,
            is primarily a client-side language that runs in the browser and is
            used to create interactive user interfaces and dynamic web pages.
            While JavaScript can also be used for server-side development with
            technologies like Node.js, it is primarily used for client-side
            development. JavaScript has been rapidly growing in recent years,
            with many popular frameworks like Angular, React, and Vue which are
            widely used for building complex client-side web applications,
            providing great performance, and more efficient responsive user
            interfaces. When deciding between PHP and JavaScript for a project,
            you should consider the type of project and its requirements. For
            example, if you're building a data-driven application that requires
            server-side logic and database integration, then PHP would be a good
            choice. But if you're building a complex client-side web application
            that requires a high level of interactivity and a responsive user
            interface, then JavaScript would be the better choice. When it comes
            to syntax, PHP is easier to learn for someone new to programming, as
            it has a similar structure to C, Java, and C++. JavaScript, on the
            other hand, has a different syntax, which can be steeper for someone
            who's not familiar with it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
