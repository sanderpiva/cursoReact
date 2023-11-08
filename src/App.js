
import './App.css';
import { useState } from "react"
import "./App.css"

function App() {
  const [contador, setContador] = useState(0);
  return (<div>
    <p>{contador}</p>
    <button onClick={() => setContador(contador + 1)}>+</button>
    <button onClick={() => {
      console.log(contador);
      if (contador > 0) {
        setContador(contador - 1);
      } else {
        alert("oi");
      }
    }
    }>-</button>

  </div>);
}

export default App;


