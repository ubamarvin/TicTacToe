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



//_______MODEL_________________
//add let = turn, toggles between X and 0
// wrap inside iife ( module pattern)
function createGameField(dim) {
    //set Turn to X
    let turn = "X"
    //create dim * dim sized matrix
    let field = Array.from({length: dim}, () => Array(dim).fill("+") )
    
    //get Symbol of current turn and set to next
    //closure, since f accesses parents scope var
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
    //closure, since f accesses parents scope var

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
        //return updated board?
    }
    //returns if player won, which and where
    //returns an object
    const checkForWinner = function() {
        
        // horizontally
        for (let i = 0; i < dim; i++) {
            let row = []
            for (let j = 0; j < dim; j++){
                console.log(`${i} ${j}`)
                row.push(field[i][j])
            }
            if(allEqual(row) != "+"){
                //explicit notaion: not sure why
                return {Winner: row[0], row: i }
            }       
        }
        
        //0,0  1,0 2,0
        // vertically
        for (let i = 0; i < dim; i++) {
            let collum = []
            for (let j = 0; j < dim; j++){
                console.log(`${j} ${i}`)
                console.log(field[j][i])
                collum.push(field[j][i])
            }
            if(allEqual(collum) != "+"){
                //explicit notaion: not sure why
                return {Winner: collum[0], collum: i }
            }       
        }

        //go thru the diagonal line

    }

    function allEqual(row){
        //check if either is player Symbol..
        console.log("alleq" + row)
        let symbol = row[0]
        if (row[0] != "X" && !row[0] != "O")
            return "+"

        if (row.every(v => v === row[0]))
            return row[0]
        
        return "+"
    }
    
            

    //closure, since f accesses parents scope var
    const toString = function printField() {
        return field.map(row => `[ ${row.join(' ')}]`).join("\n")
    }
    // implicit Object Propertys
    // Shorthand notation: Each Property matches data within scope of function
    return { field, getAndSetTurn, placeToken, toString, checkForWinner }

}

function printField(gameField) {
    return gameField.field.map(row => `[ ${row.join(' ')}]`).join("\n")
}


//Controller
//communicates between model and view

//View
//...renders the dom
// build the tui here...




//________TEST AREA_________//
let gameField = createGameField(3)


console.log(printField(gameField))

console.log(gameField.placeToken(0,0))
console.log(printField(gameField))
console.log(gameField.placeToken(1,0))
console.log(printField(gameField))

console.log(gameField.placeToken(0,1))
console.log(gameField.placeToken(1,1))
console.log(gameField.placeToken(0,2))
console.log(gameField.placeToken(2,1))






//gameField.field[0][2] = "+"
console.log(gameField.toString())


console.log(gameField.checkForWinner())








