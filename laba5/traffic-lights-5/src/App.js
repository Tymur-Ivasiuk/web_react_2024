import './App.css';
import TrafficLight from "./components/TrafficLight/TrafficLight.jsx";

const App = () => {
  
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/trafic-light-vertical' element={}/>
        <Route path='/trafic-light-gorizontal' element={<TrafficLight gorizontal="1" />}/>

      </Routes> */}
      <TrafficLight />
    </div>
  );
}

export default App;
