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
              <a href="/">Twitter</a>
            </li>
            <li class="social-link">
              <a href="/">Github</a>
            </li>
            <li class="social-link">
              <a href="/">Linkedin</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
