'use client'
import { useState } from "react"

export default function Home () {
const [text, setText] = useState('')
    return <div>
        <p>{text}</p>
        <input type="text" onChange={(e)=> {
            setText(e.target.value)
        }} />
    </div>
}