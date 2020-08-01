function cannotCapture(board) {
	const rows = board.length;
	const cols = board[0].length;
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (board[row][col] === 1) {
				if (
					(row - 2 >= 0) && (board[row - 2][col - 1] || board[row - 2][col + 1]) || 
					(row - 1 >= 0) && (board[row - 1][col - 2] || board[row - 1][col + 2]) || 
					(row + 1 < rows) && (board[row + 1][col - 2] || board[row + 1][col + 2]) || 
					(row + 2 < rows) && (board[row + 2][col - 1] || board[row + 2][col + 1])
				) {
					return false;
				}
			}
		}
	}
	return true;
}
