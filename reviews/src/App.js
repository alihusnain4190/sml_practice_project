import "./App.scss";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <div className="review">
        <h1 className="review__h1">Our Reviews</h1>

        <hr className="review__line"></hr>
      </div>
      <Person />
    </div>
  );
}

export default App;
