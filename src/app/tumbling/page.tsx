"use client"
import React, { ChangeEventHandler, use, useContext, useEffect, useState } from 'react'
import { disciplineScore, TumblingScoreContext } from '../components/Tabs'
import { tumblingBasic, tumblingElement } from '../data/tumbling_basic_elements'
import { getCalculatedTeamRoundScore } from '../utils/utility'

export default function TeamRound() {
  const score = useContext(TumblingScoreContext)
  
  let [series, setSeries] = useState(score.teamRound.series)
  let [diffScore, setDiffScore] = useState(getCalculatedTeamRoundScore(score).toPrecision(2))
  const [numberOfElements, setNumberOfElements] = useState(score.teamRound.series.length)
  const basicElements = tumblingBasic


  const addNumberOfElements = () => {
    if (numberOfElements >= 6) {
      return
    } else {
      setNumberOfElements(numberOfElements + 1) 
      score.teamRound.series.push('')
    }
  }
  const removeNumberOfElements = () => {
    if (numberOfElements == 1) {
      return 
    } else {
      setNumberOfElements(numberOfElements -1)
      score.teamRound.series.pop()
      setDiffScore(getCalculatedTeamRoundScore(score).toPrecision(2))
    }
  }

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    //console.log(e.target.id);
    let id = Number(e.target.id)
    score.teamRound.series[id] = e.target.value
    setDiffScore(getCalculatedTeamRoundScore(score).toPrecision(2))
  }

  return (
    <div>
      <h2>Team Round</h2>
      <p>Difficulty {diffScore}</p>
      <h3>Choose number of elements:</h3>
      <button className='bg-white hover:bg-gray-400 hover:text-white text-black font-bold py-2 px-4 rounded' onClick={removeNumberOfElements}>-</button>
      <span className='mx-8'>{numberOfElements}</span>
      <button className='bg-white hover:bg-gray-400 hover:text-white text-black font-bold py-2 px-4 rounded' onClick={addNumberOfElements}>+</button>
      <h3>Choose TeamRound acrobatics series: </h3>
      {series.map(el => {
        return (
          <div key={el + Math.random()}>
            <select name="basicElements" id={series.indexOf(el).toString()} value={el} className="text-black py-2 px-3 rounded" onChange={handleChange}>
              <option >please select difficulty</option>
              {basicElements.map((element) => (
                <option key={element.id + Math.random()} value={element.id}>{element.name} - {element.score}</option>
              ))}
            </select>
          </div>
        )
      })}
    </div>
  )
} 
