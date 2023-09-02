import AudioEl from "./AudioEl";
import { allMusic } from "../../data/data";
import '../../style/index.scss'

function App() {
  return (
    <div >
      <h1>Be a DJ simple</h1>
      <div className="allMisuc">
        {allMusic.map((music, index) => (
          <AudioEl key={index} song={music} />
        ))}
      </div>
    </div>
  );
}

export default App;
