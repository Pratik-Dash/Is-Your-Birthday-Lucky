import "./styles.css";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState("");
  const [luckyNum, SetLuckyNum] = useState("");
  const [result, setResult] = useState("");

  function handleDateEvent(event) {
    setDate(event.target.value);
  }
  function handleNumEvent(event) {
    
    SetLuckyNum(event.target.value);
    
  }
function ClickEventHandler() {
    if (date !== "" && luckyNum !== "") {
      if (luckyNum > 0) {
        var modifiedDate = date.replaceAll("-", "");
        console.log(modifiedDate);
        var sum = 0;

        for (const character of modifiedDate) {
          sum += Number(character);
        }
        if (sum % luckyNum === 0) {
          setResult("Yaaayy! your birthday is lucky 😎");
        } else {
          setResult(
            "Sorry, Your birthday is unlucky, but you are one of the lucky ones who get to make their own luck. ✊ "
          );
        }
      } else {
        setResult("lucky Number cannot be zero or negative");
      }
    } else {
      setResult("One or both the inputs are empty.");
    }
  }
  return (
    <div className="App">
      <header className="header">
        {" "}
        <h1>Is your birthday lucky? 🤔</h1>
      </header>
      <div class="description-container">
        <h2>Enter your birth date and your lucky number to find out.</h2>
      </div>
      <div class="control-container">
        <label for="date">Date Of Birth</label>
        <input
          type="date"
          className="control date-control"
          id="date"
          value={date}
          onChange={(event) => {
            handleDateEvent(event);
          }}
        />
        <label for="date">Lucky Number</label>
        <input
          type="number"
          className="control"
          id="luck-number"
          value={luckyNum}
          onChange={(event) => {
            handleNumEvent(event);
          }}
        />

        <button
          className="check-btn"
          id="check-btn"
          onClick={ClickEventHandler}
        >
          Check
        </button>

        <textarea
          readonly
          disabled
          className="control output"
          id="final-result"
          value={result}
        />
      </div>
      <p id="disclaimer">
        This is just a fun app to play with your friends. We do not intend to
        store any personal information by any means.
      </p>
      <footer>
        <h2>Get In Touch.</h2>

        <div className="social-links-conatienr">
          <ul className="social-links">
            <li class="social-link">
              <a href="https://twitter.com/Prateek24675372" target = "_blank"><ion-icon name="logo-twitter"></ion-icon></a>
            </li>
            <li class="social-link">
              <a href="https://github.com/Pratik-Dash"  target = "_blank"><ion-icon name="logo-github"></ion-icon></a>
            </li>
            <li class="social-link">
              <a href="https://www.linkedin.com/in/pratik-dash-5a7217134/"  target = "_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
