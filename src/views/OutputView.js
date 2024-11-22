import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResultText() {
    Console.print("\n실행 결과");
  }

  static printRaceResult(currentRaceInfo) {
    let logs = [];
    currentRaceInfo.forEach(([carName, curPosition]) => {
      logs.push(`${carName} : ${"-".repeat(curPosition)}`);
    });

    Console.print(logs.join("\n"));
    Console.print("");
  }

  static printWinners(winners) {
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default OutputView;
