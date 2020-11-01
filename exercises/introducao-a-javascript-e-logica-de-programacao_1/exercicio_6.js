
function chess(piece){
    
if (piece.toLowerCase() === 'king') {
    return 'all directions';
}else if (piece.toLowerCase() === 'queen') {
  return 'horizontals, verticals and diagonals';
}else if (piece.toLowerCase() === 'bishop') {
    return 'diagonals';
}else if (piece.toLowerCase() === 'knight') {
    return 'L form';
}else if (piece.toLowerCase() === 'rook') {
    return 'verticals and horizontals';
}else if (piece.toLowerCase() === 'pawn') {
    return 'just forward';
}else {
    return 'error';
}
}
console.log(chess('KING'));
