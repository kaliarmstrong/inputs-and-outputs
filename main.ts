input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("GOOD")
    basic.showString("NOW PUSH")
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("NICE JOB")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("GOOD")
    basic.showString("NOW PUSH BOTH")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("OH HEY")
    basic.showIcon(IconNames.Happy)
    basic.showString("PUSH")
    basic.showArrow(ArrowNames.West)
})
basic.showString("SHAKE")
