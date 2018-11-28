import React from "react"
import "semantic-ui-css/semantic.min.css";
import "../LandingPageQuote.css";


const LandingPageQuote = () => {


  return(
    <div className="quote-container">
      <div className="quote">
          <img alt={"psych"} id="brain" src={"psychology.png"}/>
          <br />
        <p id="quote-text">"A positive attitude gives you power over your circumstances instead of your circumstances having power over you."</p>
      </div>
    </div>
  )


}
export default LandingPageQuote;