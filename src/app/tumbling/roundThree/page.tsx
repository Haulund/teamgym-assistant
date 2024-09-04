'use client'
import SeriesPicker from '@/app/components/SeriesPicker'
import { disciplineScore, TumblingScoreContext } from '@/app/components/Tabs'
import { IDENTIFIER_ROUND, IDENTIFIER_SERIES } from '@/app/utils/constants'
import React, { useContext, useState } from 'react'
import { tumblingElement, tumblingBasic } from '@/app/data/tumbling_basic_elements'
export function getCalculatedRoundThreeScore(score: disciplineScore) {
  let result = 0

  Object.values(score.roundThree).forEach(series => {
    series.forEach(el => {
      let element: tumblingElement | undefined = tumblingBasic.find(element => element.id === el)
      if (element) {
        result += element.score
      }
    })
  })
  return result;
}
export default function RoundThree() {
  const score = useContext(TumblingScoreContext)
  let [diffScore, setDiffScore] = useState(getCalculatedRoundThreeScore(score).toPrecision(2))
  //const [numberOfElementsArray, setNumberOfElementsArray] = useState([score.roundTwo.first.length, score.roundTwo.second.length, score.roundTwo.third.length, score.roundTwo.fourth.length, score.roundTwo.fifth.length, score.roundTwo.sixth.length])
  const [firstSeries, setFirstSeries] = useState(score.roundThree.first)
  const [secondSeries, setSecondSeries] = useState(score.roundThree.second)
  const [thirdSeries, setThirdSeries] = useState(score.roundThree.third)
  const [fourthSeries, setFourthSeries] = useState(score.roundThree.fourth)
  const [fifthSeries, setFifthSeries] = useState(score.roundThree.fifth)
  const [sixthSeries, setSixthSeries] = useState(score.roundThree.sixth)
  
  return (
    <div>
    <h2>Round Three</h2>
    <p>Difficulty {diffScore}</p>
    <h3>Choose number of elements first series:</h3>
    <SeriesPicker series={firstSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.FIRST}}/>
    <SeriesPicker series={secondSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.SECOND}}/>
    <SeriesPicker series={thirdSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.THIRD}}/>
    <SeriesPicker series={fourthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.FOURTH}}/>
    <SeriesPicker series={fifthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.FIFTH}}/>
    <SeriesPicker series={sixthSeries} identifier={{round: IDENTIFIER_ROUND.ROUNDTHREE, series: IDENTIFIER_SERIES.SIXTH}}/>
  </div>
  )
}
