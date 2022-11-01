import './App.scss';
import createHistory from "history/createBrowserHistory";
import { Main } from './components/Routing/Routs';


export let history = createHistory();
function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
