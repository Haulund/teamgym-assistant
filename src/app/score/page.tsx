"use client"
import React, { useContext } from 'react' 
import { TumblingScoreContext } from '../components/Tabs'

export default function Score() {
  const score = useContext(TumblingScoreContext) // Replace MyContext with the actual context object
  return (
    <div>
      <h2>Score</h2>
      <p>Team Round {score.teamRound.difficulty}</p>
      <p>Round Two {score.roundTwo.difficulty}</p>
      <p>Round Three {score.roundThree.difficulty}</p>
    </div>
  )
}
