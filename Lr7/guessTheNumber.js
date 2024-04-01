let game = false
let randomNumber 
let playerGuess
let attemptCount = 1

function guessTheNumberGame () { 

while (true){

        if (game === false) {
            startGame()
        }  

    // игра
        while (game){
        
            playerGuess =  prompt('введите число от 1 до 10')
            // првоерка типа
            if (answerChecker(playerGuess)){
                // проверка ответа 
                if (+playerGuess === randomNumber){
                    
                    alert('Вы выйграли!')
                    endOfGame()
                }

                // подсказки
                else {
                    if (+playerGuess > randomNumber)
                        alert(`Много, номер попытки ${attemptCount}`)
                    if (+playerGuess < randomNumber)
                        alert(`Мало, номер попытки ${attemptCount}`)

                    if ( attemptCount === 5 ){
                        alert('Вы проиграли(')
                        endOfGame()
                    }
                    attemptCount++
                    // конец игры при > 5

                }
            } else {
                alert('неккоректные данные')
            }
            
        }

    }
}

function startGame() {
    game = true
    alert('сейчас компьютер загадает число от 1 до 10, у вас 5 попыток')
    randomNumber = Math.floor(Math.random() * 10) +1;
}

function endOfGame() {
    game = false
    attemptCount = 1
}

function answerChecker(s) {
    return (!isNaN(s))
}


guessTheNumberGame()