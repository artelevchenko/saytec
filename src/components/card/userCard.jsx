
export function User (props) {
  return(
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrynvBWNpmWW2TJMiKnl3gLREufMLfgpmwSQ&usqp=CAU" alt="img"/>
        <h1>Шалом Алейкум</h1>
        <p>{props.text}</p>
      </div>
  )
}