import { useState } from 'react'
import Box from '../Box/Box'
import './app.css'

export default function App() {
    const [letters, setLetters] = useState(['a', 'b', 'c'])

    const changeLetter = (newLetter, ind) => {
        console.log(newLetter, ind)
        setLetters(
            prevLetters => [
                ...prevLetters.slice(0, ind),
                newLetter,
                ...prevLetters.slice(ind+1)
            ]
        )
    }
    const addNewLetter = (ind) => {
        console.log(ind)
        setLetters(
            prevLetters => [
                ...prevLetters.slice(0, ind+1),
                '_',
                ...prevLetters.slice(ind+1)
            ]
        )
    }
    const combinedLetters = letters.join('')
    return (
        <div className='App'>
            <div className="boxes">
                {letters.map(
                    (letter, ind) => <Box letter={letter} onChange={changeLetter} ind={ind} key={ind} lastInd={letters.length} onClick={addNewLetter} />)
                }
            </div>
            <div>{combinedLetters}</div>
        </div>
        
    )
}