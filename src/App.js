import './App.css';
import {Simpsons} from "../../hw/src/components/Simpsons/Simpsons";
import {RickMortys} from "../../hw/src/components/RickMortys/RickMortys";

const App = () => {
    return (
        <div className="App">
            <Simpsons/>
            <RickMortys/>
        </div>
    );
};
export default App;