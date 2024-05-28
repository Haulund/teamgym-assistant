import React, { useReducer, useState } from "react";
import SeriesForm from "./SeriesForm";
import { Action, State } from "../tumbling/page";

export default function RoundCalculator() {
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
  return (
    <div>
      <h2>Team Round</h2>
      {<p>Round Score: {state.firstRound}</p>}
      <SeriesForm title="Team Series" submitSeriesScore={(score: number) => handleFirstSeries(score)} />
    </div>
  );
}
