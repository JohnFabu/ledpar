let led2 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let range = led2.range(0, 9)
range.showColor(neopixel.colors(NeoPixelColors.Green))
for (let index = 0; index < 8; index++) {
    led2.show()
    led2.shift(1)
    basic.pause(1000)
}
