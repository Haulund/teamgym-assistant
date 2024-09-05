"use client"
import { TumblingScoreContext } from '@/app/components/Tabs'
import { getCalculatedTeamRoundScore, getCalculatedRoundTwoScore, getCalculatedRoundThreeScore, getCalculatedRoundScoreFromSeries, getElementById } from '@/app/utils/utility'
import React, { useContext, useState } from 'react'



export default function ScoreOverview() {
  const score = useContext(TumblingScoreContext)
  let [teamRoundScore, setTeamRoundScore] = useState(getCalculatedTeamRoundScore(score))
  let [secondRoundScore, setSecondRoundScore] = useState(getCalculatedRoundTwoScore(score))
  let [thirdRoundScore, setThirdRoundScore] = useState(getCalculatedRoundThreeScore(score))
  let totalScore = (teamRoundScore + secondRoundScore + thirdRoundScore) / 3
  return (
    <div>
      <h2 className='font-medium text-lg mb-4'>Score Overview</h2>
      <div className='mb-4'>
        <p>Team Round {teamRoundScore.toPrecision(2)}</p>
        <span>Team Series: </span>
        {score.teamRound.series.map((element, index) => <span key={index}> {getElementById(element)}</span>)}
        <span> {(getCalculatedTeamRoundScore(score) / 6).toFixed(2)}</span>
      </div>
      <div className='mb-4'>
        <p>Round Two {secondRoundScore.toPrecision(2)}</p>
        {Object.values(score.roundTwo).map((series: string[], index) => {
          return (
            <div>series: {index + +1}
              {series.map((element, index) => <span key={index}> {getElementById(element)}</span>)}
              <span> {getCalculatedRoundScoreFromSeries({series}).toFixed(2)}</span>
            </div>
          )
        })}
      </div>
      <div className='mb-4'>
        <p>Round Three {thirdRoundScore.toPrecision(2)}</p>
        {Object.values(score.roundThree).map((series: string[], index) => {
          return (
            <div>series: {index + +1}
              {series.map((element, index) => <span key={index}> {getElementById(element)} </span>)}
              <span> {getCalculatedRoundScoreFromSeries({series}).toFixed(2)}</span>
            </div>
          )
        })}
      </div>
      <div className='mb-4'>
        <p>Total Score {totalScore.toPrecision(3)}</p>
      </div>
    </div>
  )
}
