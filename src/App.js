import "./App.css";
import spinner from "./spinner.jpg";
import Card from "./components/user-interface/Card.jsx";

function App() {
    return (
        <div className="App">
            <img src={spinner} alt="" width="20%" height="20%"></img>
            <Card className="rounded-corners">Hello</Card>
        </div>
    );
}

export default App;
