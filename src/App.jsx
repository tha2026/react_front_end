import "./App.css";
import spinner from "./spinner.jpg";
import ButtonCard from "./components/button/ButtonCard.jsx";
import Form from "./components/form/Form.jsx";

function App() {
    return (
        <div className="App">
            <img src={spinner} alt="" width="25%" height="25%"></img>
            <ButtonCard></ButtonCard>
            <Form></Form>
        </div>
    );
}

export default App;
