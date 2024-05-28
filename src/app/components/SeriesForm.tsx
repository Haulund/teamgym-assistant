import React, { useReducer, useState } from "react";
import ElementPicker from "./ElementPicker";
import { Action } from "../tumbling/page";

interface SeriesFormProps {
  title: string;
  submitSeriesScore: (score: number) => void;
}

interface ElementScoreState {
  score: number;
}

interface ActionElementSelected extends Action {
  elementNumber: number;
}

const SeriesForm: React.FC<SeriesFormProps> = ({ title, submitSeriesScore }) => {
  const [numberOfElements, setNumberOfElements] = useState([1, 2, 3]);
  const [elementScore, setElementScore] = useState([0, 0, 0]);
  const [seriesScore, setSeriesScore] = useState(0);

  const initialState: ElementScoreState = { score: seriesScore };

  function reducer(state: ElementScoreState, action: ActionElementSelected) {
    switch (action.type) {
      case "elementSelected":
        const updatedElementScore = [...elementScore];
        updatedElementScore[action.elementNumber - 1] = action.score;
        setElementScore(updatedElementScore);
        const reducedScore = updatedElementScore.reduce((a, b) => a + b, 0);
        setSeriesScore(reducedScore);
        return { ...state, score: action.score };
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function getElementScore(score: number, elementNumber: number) {
    dispatch({ type: "elementSelected", score, elementNumber });
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    let roundscore = seriesScore * 6;
    const finalRoundScore = Number(roundscore.toFixed(1));
    submitSeriesScore(finalRoundScore);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 my-6">
      <h3>{title}</h3>
      {numberOfElements.map((element) => (
        <ElementPicker key={element} elementNumber={element} elementSelected={(score: number, elementNumber) => getElementScore(score, elementNumber)} />
      ))}

      <button type="submit" className="w-full py-2 px-4 border rounded-md shadow-sm text-sm font-medium border-white text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};

export default SeriesForm;
