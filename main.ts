basic.forever(function () {
    serial.writeValue("x1", pins.digitalReadPin(DigitalPin.P1))
    serial.writeValue("x2", pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
