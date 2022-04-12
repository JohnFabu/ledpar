let led2 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let range = led2.range(0, 2)
range.showColor(neopixel.colors(NeoPixelColors.Red))
for (let index = 0; index < 8; index++) {
    led2.shift(1)
    led2.show()
    basic.pause(1000)
}
