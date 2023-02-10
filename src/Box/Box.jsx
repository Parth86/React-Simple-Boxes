import './box.css'

export default function Box({letter, onChange, ind, lastInd, onClick}) {
    return (
        <div className="box">
            <input onChange={(e) => onChange(e.currentTarget.value, ind)} value={letter}/>
            {ind != lastInd-1 && <span className='plus' onClick={() => onClick(ind)} >{' '}</span>}
        </div>
    )
}