basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showString("JNV")
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
