import "./App.scss";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <div className="review">
        <span className="review__span">Our Reviews</span>
        <hr className="review__line"></hr>
      </div>
      <Person />
    </div>
  );
}

export default App;
