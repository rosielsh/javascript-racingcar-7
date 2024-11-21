class OutputView {
  static printRaceResult(carNames, positions) {
    Console.print("실행 결과\n");

    let logs = [];
    carNames.forEach((carName, idx) => {
      logs.push(`${carName} : ${"-".repeat(positions[idx])}`);
    });

    Console.print(logs.join("\n"));
    Console.print("");
  }

  static printWinners(winners) {
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default OutputView;
