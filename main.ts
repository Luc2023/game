input.onButtonPressed(Button.A, function () {
	
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
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let rounds = 0
let ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
ties = 0
rounds = 0
OLED.writeStringNewLine("ShallWePlayAGame?")
basic.pause(2000)
showScoreboard()
