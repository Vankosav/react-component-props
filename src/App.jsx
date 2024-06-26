import "./styles.css";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import FlightCard from "./components/FlightCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Status details={{ airport: "MIA", direction: "Departures" }} />
      <FlightCard price={262} flightCode="AA 68" destination="Madrid" />
      <FlightCard price={660} flightCode="AF 99" destination="Paris" />
    </div>
  );
}

export default App;
