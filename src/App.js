import RaceController from "./controller/RaceController.js";

class App {
  async run() {
    await new RaceController().race();
  }
}

export default App;
