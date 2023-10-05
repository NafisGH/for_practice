import "./App.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SectionOne } from "./Sections";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <span className="text text_focused">text</span>
      <button className="App__button_">click</button>
      <input placeholder="input value"></input>
      <ul className="body">
        <li className="body__list">list 1</li>
        <li className="body__list">
          list 2<span className="body__span">span</span>
        </li>
        <li className="body__list">list 3</li>
      </ul>
    </div>
  );
}

export default App;
