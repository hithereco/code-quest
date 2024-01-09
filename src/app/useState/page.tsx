'use client'
import { useState } from "react"

export default function Home () {
const [text, setText] = useState(0)
    return <div>
        <p>{text}</p>
        <button onClick={()=> {
            setText((prev)=> prev + 1)
        }}
        >버튼</button>
        
    </div>
}