input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # . # . #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
})
basic.forever(function () {
    music.play(music.stringPlayable("G C E C A E F D ", 50), music.PlaybackMode.UntilDone)
})
