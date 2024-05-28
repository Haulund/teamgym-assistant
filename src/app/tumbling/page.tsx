"use client";
import React, { useReducer, useState } from "react";
import SeriesForm from "../components/SeriesForm";

export type State = {
  firstRound: number;
  secondSeries: number;
  thirdSeries: number;
  scoreSummary: number;
};

export type Action = {
  type: string;
  score: number;
};

export default function Tumbling() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [calculatedScore, setCalculatedScore] = useState(0);

  const initialState: State = {
    firstRound: 0,
    secondSeries: 0,
    thirdSeries: 0,
    scoreSummary: 0,
  };

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "addFirstSeriesScore":
        let firstRoundScore = 1;
        setCalculatedScore(calculatedScore + firstRoundScore);
        return { ...state, firstRound: action.score };
      case "addSecondSeriesScore":
        let secondSeriesScore = 1;
        setCalculatedScore(calculatedScore + secondSeriesScore);
        return { ...state, secondSeries: state.secondSeries + secondSeriesScore };
      case "addThirdSeriesScore":
        let thirdSeriesScore = 1;
        setCalculatedScore(calculatedScore + thirdSeriesScore);
        return { ...state, thirdSeries: state.thirdSeries + thirdSeriesScore };
      default:
        throw Error("Unknown action: " + action.type);
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFirstSeries(score: number) {
    dispatch({ type: "addFirstSeriesScore", score });
  }

  function handleSecondSeries(gymnastNumber: number): void {
    throw new Error("Function not implemented.");
  }

  /* function handleSecondSeries(): void {
    dispatch({ type: "addSecondSeriesScore" });
  }
  function handleThirdSeries(): void {
    dispatch({ type: "addThirdSeriesScore" });
  } */

  return (
    <div>
      <div className="flex border-b">
        <button className={`py-2 px-4 ${activeTab === "tab1" ? "border-b-2 white-blue-500" : ""}`} onClick={() => setActiveTab("tab1")}>
          Team Round
        </button>
        <button className={`py-2 px-4 ${activeTab === "tab2" ? "border-b-2 white-blue-500" : ""}`} onClick={() => setActiveTab("tab2")}>
          2nd Round
        </button>
        <button className={`py-2 px-4 ${activeTab === "tab3" ? "border-b-2 white-blue-500" : ""}`} onClick={() => setActiveTab("tab3")}>
          3rd Round
        </button>
        <button className={`py-2 px-4 ${activeTab === "tab4" ? "border-b-2 white-blue-500" : ""}`} onClick={() => setActiveTab("tab4")}>
          Final Score
        </button>
      </div>
      <div className="p-5">
        {activeTab === "tab1" && (
          <>
            {/* <RoundCalculater title={"Team Round"} getRoundScore={(score: number) => getFirstRoundScore(score)} /> */}
            <div>
              <h2>Team Round</h2>
              {<p>Round Score: {state.firstRound}</p>}
              <SeriesForm title="Team Series" submitSeriesScore={(score: number) => handleFirstSeries(score)} />
            </div>
          </>
        )}
        {activeTab === "tab2" && (
          <div>
            <h2>2nd Round</h2>
            {<p>Team Round Score: {state.secondSeries}</p>}
            <SeriesForm title="1. Series" submitSeriesScore={() => handleSecondSeries(1)} />
            <SeriesForm title="2. Series" submitSeriesScore={() => handleSecondSeries(2)} />
            <SeriesForm title="3. Series" submitSeriesScore={() => handleSecondSeries(3)} />
            <SeriesForm title="4. Series" submitSeriesScore={() => handleSecondSeries(4)} />
            <SeriesForm title="5. Series" submitSeriesScore={() => handleSecondSeries(5)} />
            <SeriesForm title="6. Series" submitSeriesScore={() => handleSecondSeries(6)} />
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <h2>3nd Round</h2>
            {<p>Team Round Score: {state.thirdSeries}</p>}
            {/*<SeriesForm title="1. Series" submitSeriesScore={() => handleThirdSeries()} />
             <SeriesForm title="2. Series" submitSeriesScore={() => console.log("SeriesScore")} />
            <SeriesForm title="3. Series" submitSeriesScore={() => console.log("SeriesScore")} />
            <SeriesForm title="4. Series" submitSeriesScore={() => console.log("SeriesScore")} />
            <SeriesForm title="5. Series" submitSeriesScore={() => console.log("SeriesScore")} />
            <SeriesForm title="6. Series" submitSeriesScore={() => console.log("SeriesScore")} /> */}
          </div>
        )}
        {activeTab === "tab4" && <div>Score Summary: {calculatedScore} </div>}
      </div>
    </div>
  );
}
