maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 500)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 5) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 173)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 173)
        basic.pause(350)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 173)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 173)
        basic.pause(350)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
        basic.pause(50)
    }
})
