import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const initialCounters = [
  {
    id:123,
    value:13
  },
  {
    id:234,
    value:110
  },
  {
    id:'fdfd4545',
    value: -80
  }
]

function App() {
  const [counts,setCounts] = useState(initialCounters)
  const plus = () => {
    //setCount(count + 1)
  }
  const minus = (id) => {
    console.log(id);
    const updatedCounts = counts.map( el => el.id === id
    ? {...el, value:el.value - 1}
        :el
    );
    setCounts(updatedCounts)
  }
  return (
      <div className="App">

        <ul>
          {counts.map( el=>(
              <li key={el.id}>
                <button onClick={() => minus(el.id)}>minus</button>
                {el.value}
                <button onClick={plus}>plus</button>
              </li>
              )

          )}
        </ul>
 <hr/>
        <button>Add Counter</button>
      </div>
  );
}

export default App;
