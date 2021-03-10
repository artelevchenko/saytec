import { useState } from 'react'

export const Card = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Педро");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => {setCount(count + 1)}}>+1</button>


      <div>
        <h1>{name}</h1>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      </div>
    </div>
  )
}
