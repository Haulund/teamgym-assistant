"use client"
import { TumblingScoreContext } from '@/app/components/Tabs'
import { getCalculatedTeamRoundScore, getCalculatedRoundTwoScore, getCalculatedRoundThreeScore } from '@/app/utils/utility'
import React, { useContext, useState } from 'react'


export default function ScoreOverview() {
  const score = useContext(TumblingScoreContext)
  let [teamRoundScore, setTeamRoundScore] = useState(getCalculatedTeamRoundScore(score))
  let [secondRoundScore, setSecondRoundScore] = useState(getCalculatedRoundTwoScore(score))
  let [thirdRoundScore, setThirdRoundScore] = useState(getCalculatedRoundThreeScore(score))
  let totalScore = (teamRoundScore + secondRoundScore + thirdRoundScore)/3
  return (
    <div><h2>Score Overview</h2>
      <p>Team Round {teamRoundScore.toPrecision(2)}</p>
      <p>Round Two {secondRoundScore.toPrecision(2)}</p>
      <p>Round Three {thirdRoundScore.toPrecision(2)}</p>
      <p>Total Score {totalScore.toPrecision(3)}</p>
    </div>
  )
}
