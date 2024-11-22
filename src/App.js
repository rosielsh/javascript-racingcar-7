import RaceController from "./controller/RaceController.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    const views = {
      inputView: InputView,
      outputView: OutputView,
    };
    
    await new RaceController(views).race();
  }
}

export default App;
