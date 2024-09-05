import { disciplineScore } from "../components/Tabs"
import { tumblingBasic, tumblingElement } from "../data/tumbling_basic_elements"


export function getCalculatedTeamRoundScore(score: disciplineScore) {
  let result = 0

  // this from store
  let elements = score.teamRound.series

  elements.forEach(el => {
    let element: tumblingElement | undefined = tumblingBasic.find(element => element.id === el)
    if (element) {
      result += element.score
    }
  })
  return result * 6;
}


export function getCalculatedRoundTwoScore(score: disciplineScore) {
  let result = 0

  Object.values(score.roundTwo).forEach(series => {
    series.forEach(el => {
      let element: tumblingElement | undefined = tumblingBasic.find(element => element.id === el)
      if (element) {
        result += element.score
      }
    })
  })
  return result;
}




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

export function getCalculatedRoundScoreFromSeries({ series }: { series: string[] }) {
  const scoreArray: number[] = series.map(el => {
    const element: tumblingElement | undefined = tumblingBasic.find(element => element.id === el);
    return element?.score ?? 0;
  });

  const sortedArray = scoreArray.sort((a, b) => b - a);

  let result = 0;

  if (sortedArray.length >= 2) {
    return result = sortedArray[0] + sortedArray[1];
  }
  if (sortedArray.length) {
    return result = sortedArray[0];
  }

  return result;
}