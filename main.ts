basic.forever(function () {
    if (JoyPiAdvanced.joystickGetYValue() != 0 && JoyPiAdvanced.joystickGetXValue() != 0) {
        CODO.motorSpeed(CODO.Motors.MotorFull, 100)
    }
})
