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

//add let = turn, toggles between X and 0
// wrap inside iife ( module pattern)
function createGameField(dim) {
    //set Turn to X
    let turn = "X"
    //create dim * dim sized matrix
    let field = Array.from({length: dim}, () => Array(dim).fill("+") )
    
    //get Symbol of current turn and set to next
    const getAndSetTurn = function (){
        let oldTurn = turn;
        if (oldTurn === "X"){
            turn = "O"
        }else {
            turn = "X"
        }
        return oldTurn
    }
    //place Token inside field
    const placeToken = function placeToken(x, y) {
        let length = gameField.field.length
        let field = gameField.field
        if (x >= length || y >= length){
            console.log("out of bounds")
            return
        }
    
        //check if is placable
        if (field[x][y] != "+") {
            console.log("token already placed")
            return
        }
        //place token
        field[x][y] = getAndSetTurn()
        //return updated boa
    }
    return { field, getAndSetTurn, placeToken }
}

function printField(gameField) {
    return gameField.field.map(row => `[ ${row.join(' ')}]`).join("\n")
}





//________TEST AREA_________//
let gameField = createGameField(4)


console.log(printField(gameField))

console.log(gameField.placeToken(3,3))
console.log(printField(gameField))
console.log(gameField.placeToken(3,3))
console.log(printField(gameField))

console.log(gameField.placeToken(0,0))


console.log(printField(gameField))





