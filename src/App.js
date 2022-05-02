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
  const plus = (id) => {
      console.log(id)
      const updatedCounts = counts.map( el => el.id === id
          ? {...el, value:el.value + 1}
          :el
      );
      setCounts(updatedCounts)
  }
  const minus = (id) => {
    console.log(id);
    const updatedCounts = counts.map( el => el.id === id
    ? {...el, value:el.value - 1}
        :el
    );
    setCounts(updatedCounts)
  }

  const addCounter = () => {
  const newCount = {
      id: Math.random(),
      value:0
  };
  setCounts([...counts, newCount])
  }


    const DeleteThis = (id) => {
        setCounts([...counts].filter(el => el.id !== id))

    }

    return (
      <div className="App">

        <ul>
          {counts.map( el=>(
              <li key={el.id}>
                <button onClick={() => minus(el.id)}>minus</button>
                {el.value}
                <button onClick={() => plus(el.id)}>plus</button>
                  <button onClick={() => DeleteThis(el.id)}>Delete</button>
              </li>
              )

          )}
        </ul>
 <hr/>
        <button onClick={addCounter}>Add Counter</button>
      </div>
  );
}

export default App;
