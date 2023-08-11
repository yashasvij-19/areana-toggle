import "./App.css";
import React from "react";

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  function handleToggle() {
    let div1 = document.getElementById("welcome-div");
    let div2 = document.getElementById("about-div");
    if (toggle) {
      div1.style.display = "block";
      div2.style.display = "none";
      setToggle(false);
    } else {
      div1.style.display = "none";
      div2.style.display = "block";
      setToggle(true);
    }
  }

  return (
    <div id="main">
      <div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>
      <div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>
      <button id="toggle" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
};

export default App;