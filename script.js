console.log("hello") 

// Model with View(tui)
//step 1 working console game
//gameBoard is an array inside object

//players are stored inside object

//Object for controll flow

//avoid global code

//use factories

//step 2 create object that displays  

// write fun to render gameBoard to html

// step 3 fun for players to manipulate gameboard


function createGameField(dim) {
    let field = []
    for (let i = 0; i < dim; i++ ){
        field[i] = [0];
        for (let j = 0; j < dim; j++){
            field[i][j] = 0;
        }
    }
    return field;
}

function printField(field) {
    board = ""
    for (let i = 0; i < field.length; i++){
        board += "[ "
        for (let j = 0; j < field.length; j++){
            board += "+ "
        }
        board +="] \n"
    }
    return board
}

let field = createGameField(8)

console.log(printField(field))


function placeToken(x, y, field) {
    //check if is in dim
    //check if is placable
    //place tokem
    //return updated board
    return null;
}