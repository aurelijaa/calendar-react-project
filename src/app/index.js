import React from "react";
import "./index.scss";

const Day = [
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
  "Sekmadienis",
];
const Time = [
  "8:30-10:00",
  "10:20-11:50",
  "12:10-13:40",
  "14:30-16:00",
  "16:20-17:50",
];

function App() {
  return (
    <div className="main">
      <div className="main--header">
        {Day.map((day, i) => {
          return Time.map((time, j) => (
            <React.Fragment>
              {j === 0 && (
                <div key={i} className="main--Date">
                  {day}
                </div>
              )}
              <div key={j} className="main--Time">
                {" "}
                {time}
              </div>
              <button type="button">Spauskite</button>
            </React.Fragment>
          ));
        })}
      </div>
    </div>
  );
}

export default App;

{
  /* <React.Fragment>
  {index === 0 && <div key={index}> {day}</div>}
</React.Fragment> */
}
