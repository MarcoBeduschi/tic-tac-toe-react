export enum PLAYER {
    X = 'X',
    O = 'O'
}

export type SQUARE = PLAYER | null;

export function isBoardFull(squares: SQUARE[]) {
    return !squares.includes(null);
}

export function calculateWinner(squares: SQUARE[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export function playerVictoryCount(player: PLAYER, winnerHistory: PLAYER[]) {
    return winnerHistory.filter(winner => winner === player).length;
}

export function currentPlayer(xIsNext: boolean) {
    return xIsNext ? PLAYER.X : PLAYER.O;
}
