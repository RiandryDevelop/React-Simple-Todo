import React from "react";

const blueAnchor = {
  color: "darkblue",
  fontFamily: "Arial",
  fontWeight: "bold",
};
function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>
        This is the TodoList app Demo. See more of this kind of projects in{" "}
        <a
          href="https://github.com/RiandryDevelop?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={blueAnchor}
        >
          my repository
        </a>
      </p>
    </React.Fragment>
  );
}

export default About;
