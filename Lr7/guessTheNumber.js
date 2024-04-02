let game = false
let randomNumber
let playerGuess
let attemptCount = 1
let number = 10

function guessTheNumberGame() {

    while (true) {

        if (game === false) {

            startGame()
        }

        // игра
        while (game) {

            playerGuess = prompt(`введите число от 1 до ${number}`)
            // првоерка типа
            if (answerChecker(playerGuess)) {
                // проверка ответа 
                if (+playerGuess === randomNumber) {

                    alert('Вы выйграли!')
                    endOfGame()
                }

                // подсказки
                else {
                    if (+playerGuess > randomNumber)
                        alert(`Много, номер попытки ${attemptCount}`)
                    if (+playerGuess < randomNumber)
                        alert(`Мало, номер попытки ${attemptCount}`)

                    if (attemptCount === 5) {
                        alert('Вы проиграли :(')
                        endOfGame()
                    }
                    attemptCount++
                    // конец игры при > 5

                }
            }
            else {
                alert('неккоректные данные')
            }

        }

    }
}
function numberRange() {
    number = prompt('Введите диапозон, в котором хотите играть, по умолчанию 10');
    if (number == '') number = 10;
    return number

}

function startGame() {
    game = true

    numberRange()

    if (answerChecker(number)) {
        alert(`Cейчас компьютер загадает число от 1 до ${number}, у вас 5 попыток`)
        randomNumber = Math.floor(Math.random() * number) + 1;
    }
    else {
        alert('неккоректные данные')
        startGame()
    }

}

function endOfGame() {
    game = false
    attemptCount = 1
}

function answerChecker(s) {
    return (!isNaN(s))
}


guessTheNumberGame()