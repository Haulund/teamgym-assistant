import React, { ChangeEvent, useState } from "react";
import { tumblingBasic, tumblingElement } from "../data/tumbling_basic_elements";

export default function ElementPicker({ elementNumber, elementSelected }: { elementNumber: number; elementSelected: (score: number, elementNumber: number) => void }) {
  const [selectValue, setSelectValue] = useState("");
  const [score, setScore] = useState(0);

  let selectOption = tumblingBasic.map((tumblingElement) => (
    <option key={tumblingElement.id} value={tumblingElement.id}>
      Element: {tumblingElement.name} - score: {tumblingElement.score}
    </option>
  ));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let score = getElementScoreById(e.target.value);
    console.log("score: ", score);

    setSelectValue(e.target.value);
    setScore(score);
    elementSelected(score, elementNumber);
  };

  return (
    <div className="flex justify-between items-center w-3/4">
      <label htmlFor={"select" + elementNumber} className="block text-sm text-white font-medium">
        Element
      </label>
      <select id={"select" + elementNumber} name={"select" + elementNumber} value={selectValue} onChange={handleChange} className="mx-8 w-2/4 text-black mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <option value="">Select...</option>
        {selectOption}
      </select>
      <span className="w-1/3">{score}</span>
    </div>
  );
}

function getElementScoreById(value: string): number {
  const element = tumblingBasic.find((element: tumblingElement) => element.id === value);
  return element ? element.score : 0;
}
