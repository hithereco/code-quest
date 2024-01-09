"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(text.length)
  }, [text]);
  return (
    <div>
      <p>{text}</p>
      <span>{'글자수:'+count}</span>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
