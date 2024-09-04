"use client"
import { TumblingScoreContext } from '@/app/components/Tabs'
import { tumblingBasic, tumblingElement } from '@/app/data/tumbling_basic_elements'
import React, { ChangeEventHandler, useContext, useState } from 'react'

export function getCalculatedRoundScoreFromSeries({series}: {series: string[]}) {
    let result = 0

    series.forEach(el => {
        let element: tumblingElement | undefined = tumblingBasic.find(element => element.id === el)
        if (element) {
            result += element.score
        }
    })
    return result;
}
export default function SeriesPicker({series, identifier}: {series: string[], identifier: {round: string, series: string}}) {
    const score = useContext(TumblingScoreContext)
    let [diffScore, setDiffScore] = useState(getCalculatedRoundScoreFromSeries({series}).toPrecision(2))
    const [numberOfElementsArray, setNumberOfElementsArray] = useState([score.roundTwo.first.length, score.roundTwo.second.length, score.roundTwo.third.length, score.roundTwo.fourth.length, score.roundTwo.fifth.length, score.roundTwo.sixth.length])
    //const [firstSeries, setFirstSeries] = useState(series)
    const seriesNumberInRound = identifier.series === 'first' ? 0 : identifier.series === 'second' ? 1 : identifier.series === 'third' ? 2 : identifier.series === 'fourth' ? 3 : identifier.series === 'fifth' ? 4 : 5
    
    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        let id = Number(e.target.id)

        Object.entries(score).forEach(([key, value]) => {
            if (key === identifier.round) {
                Object.entries(value).forEach(([key, value]) => {
                    if (key === identifier.series) {
                        value[id] = e.target.value
                    }
                })
            }
        })

        setDiffScore(getCalculatedRoundScoreFromSeries({series}).toPrecision(2))
    }

    const addNumberOfElements = () => {
        if (numberOfElementsArray[seriesNumberInRound] >= 6) {
            return
        }
        Object.entries(score).forEach(([key, value]) => {
            if (key === identifier.round) {
                Object.entries(value).forEach(([key, value]) => {
                    if (key === identifier.series) {
                        value.push('')
                    }
                })
            }
        })
        let modifyrArray = [...numberOfElementsArray]
        modifyrArray[seriesNumberInRound]++
        setNumberOfElementsArray(modifyrArray)
    }

    const removeNumberOfElements = () => {
        if (numberOfElementsArray[seriesNumberInRound] == 1) {
            return
        }
        Object.entries(score).forEach(([key, value]) => {
            if (key === identifier.round) {
                Object.entries(value).forEach(([key, value]) => {
                    if (key === identifier.series) {
                        value.pop()
                    }
                })
            }
        })
        let modifyrArray = [...numberOfElementsArray]
        modifyrArray[seriesNumberInRound]--
        setNumberOfElementsArray(modifyrArray)
    }
    return (
        <div className='my-8 border-b border-solid border-gray-300 pb-4'>
            <p>Series Score: {diffScore}</p>
            {series.map(el => {
                return (
                    <div key={el + Math.random()}>
                        <select name="basicElements" id={series.indexOf(el).toString()} value={el} className="text-black py-2 px-3 rounded" onChange={handleChange}>
                            <option >please select difficulty</option>
                            {tumblingBasic.map((element) => (
                                <option key={element.id + Math.random()} value={element.id}>{element.name} - {element.score}</option>
                            ))}
                        </select>
                    </div>
                )
            })}
            <p>Choose number of elements</p>
            <button className='bg-white hover:bg-gray-400 hover:text-white text-black font-bold py-2 px-4 rounded' onClick={removeNumberOfElements} >-</button>
            <span className='mx-8'>{numberOfElementsArray[seriesNumberInRound]}</span>
            <button className='bg-white hover:bg-gray-400 hover:text-white text-black font-bold py-2 px-4 rounded' onClick={addNumberOfElements}>+</button>
        </div>
    )
}
