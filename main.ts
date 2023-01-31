input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        `)
    PA += 1
    rounds += 1
    showScoreboard()
})
function showScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("ties: " + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds " + rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    ties += 1
    rounds += 1
    showScoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . # # .
        # . . . #
        # # # # #
        `)
    PB += 1
    rounds += 1
    showScoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    ties = 0
    rounds = 0
    OLED.writeStringNewLine("ShallWePlayAGame?")
    basic.pause(2000)
    showScoreboard()
}
let ties = 0
let rounds = 0
let PA = 0
let PB = 0
reset()
