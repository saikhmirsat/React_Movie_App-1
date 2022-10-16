import React from 'react'
import '../Pagination.css'


export default function Pagination({ current, onChange, total }) {
    const prev = <button className='btn' disabled={current === 1} onClick={() => onChange(current - 1)} >Prev</button>
    const next = <button className='btn' disabled={current === total} onClick={() => onChange(current + 1)} >Prev</button>
    const page = new Array(total).fill(0).map((ele, i) => <button className='btn' onClick={() => onChange(i + 1)} >{i + 1}</button>)

    return (
        <div >{prev} {page} {next}</div>
    )
}