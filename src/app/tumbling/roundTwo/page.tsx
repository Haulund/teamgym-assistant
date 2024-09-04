"use client"
import SeriesPicker from '@/app/components/SeriesPicker'
import { TumblingScoreContext } from '@/app/components/Tabs'
import { IDENTIFIER_ROUND, IDENTIFIER_SERIES } from '@/app/utils/constants'
import { getCalculatedRoundTwoScore } from '@/app/utils/utility'
import React, { useContext, useState } from 'react'

export default function RoundTwo() {
  const score = useContext(TumblingScoreContext)
  let [diffScore, setDiffScore] = useState(getCalculatedRoundTwoScore(score).toPrecision(2))
  //const [numberOfElementsArray, setNumberOfElementsArray] = useState([score.roundTwo.first.length, score.roundTwo.second.length, score.roundTwo.third.length, score.roundTwo.fourth.length, score.roundTwo.fifth.length, score.roundTwo.sixth.length])
  const [firstSeries, setFirstSeries] = useState(score.roundTwo.first)
  const [secondSeries, setSecondSeries] = useState(score.roundTwo.second)
  const [thirdSeries, setThirdSeries] = useState(score.roundTwo.third)
  const [fourthSeries, setFourthSeries] = useState(score.roundTwo.fourth)
  const [fifthSeries, setFifthSeries] = useState(score.roundTwo.fifth)
  const [sixthSeries, setSixthSeries] = useState(score.roundTwo.sixth)
  
  return (
    <div>
    <h2>Round Two</h2>
    <p>Difficulty {diffScore}</p>
    <h3>Choose number of elements first series:</h3>
    <SeriesPicker series={firstSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.FIRST}}/>
    <SeriesPicker series={secondSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.SECOND}}/>
    <SeriesPicker series={thirdSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.THIRD}}/>
    <SeriesPicker series={fourthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.FOURTH}}/>
    <SeriesPicker series={fifthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.FIFTH}}/>
    <SeriesPicker series={sixthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTWO, series: IDENTIFIER_SERIES.SIXTH}}/>
  </div>
  )
}
