import './App.css';
import { Card } from './components/card/card';
import { InfoCard } from './components/card/infoCard';
import { BrowserRouter, Route, Link } from "react-router-dom"

function Info () {
  return (
    <div>
      <h1>Info</h1>
    </div>

  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/" />
        <Link to="/info"/>
        <Route path="/" component={InfoCard} exact/>
        <Route path="/info" render={Info}/>
      </BrowserRouter>  
      <Card message="Всем Любві"/>
    </div>
  );
}

export default App;
