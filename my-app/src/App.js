import './App.css';
import Header from './containers/Header';

function App() {
  //const [counter, setCounter] = useState(0);
  return (
    <div className="App">
    <Header></Header>
    </div>
  );
  /*const increment=()=>{
setCounter(prevCounter =>prevCounter +1)
  }
  return(
    <div>
      value:{counter} <button onClick={increment}>Increment</button>
    </div>
  )*/
}

export default App;
