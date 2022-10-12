import './App.css';
import { useSelector } from 'react-redux';
import LeftContent from './components/LeftContent';
import MiddleContent from './components/MiddleContent';

function App() {
  const items=useSelector(state=>state.notes.items)
  console.log(items);
  return (
    <div className="App">
      <LeftContent></LeftContent>
      <MiddleContent></MiddleContent>
    </div>
  );
}

export default App;
