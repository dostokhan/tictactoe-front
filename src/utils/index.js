export function matchResult(winner) {
  switch (winner) {
    case 'one':
      return 'Player One Won';
    case 'two':
      return 'Player Two Won';
    case 'Tie':
    default:
      return 'Match Tie';
  }
}
