import "./App.css";
import spinner from "./spinner.jpg";
import ButtonCard from "./components/button/ButtonCard.jsx";

function App() {
    return (
        <div className="App">
            <img src={spinner} alt="" width="25%" height="25%"></img>
            <ButtonCard></ButtonCard>
        </div>
    );
}

export default App;
