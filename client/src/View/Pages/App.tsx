import AudioEl from "./AudioEl";
import { allMusic } from "../../data/data";
import '../../style/index.scss'

function App() {
  return (
    <div className="main-dj">
      <h1>Be a DJ simple</h1>
      <div className="allMisuc">
        {allMusic.map((music, index) => (
          <AudioEl key={index} song={music} />
        ))}
      </div>
      <footer>
        <h3>Music is taken from Pixabay.</h3>
        <h3>Authors</h3>
        <div className="allAuthors">
          <p>Alex_Kizenkov</p>
          <p>BLACKBOX</p>
          <p>LiteSaturation</p>
          <p>Muzaproduction</p>
          <p>Pixabay</p>
          <p>SergeQuadrado</p>
          <p>UNIVERSFIELD</p>
          <p>XtremeFreddy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
