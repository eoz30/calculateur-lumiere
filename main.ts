input.onButtonPressed(Button.A, function () {
    basic.showString("la luminosité")
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
