input.onButtonPressed(Button.A, function () {
    買 = 0
})
input.onGesture(Gesture.Shake, function () {
    if (輪流 == 0) {
        A += randint(1, 6)
        if (A >= 16) {
            A += -16
        }
        if (A == 0) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 0)
            basic.showLeds(`
                . # # # #
                . # # # #
                . # # # #
                . # . . .
                . # . . .
                `)
            basic.clearScreen()
            basic.pause(500)
            basic.showString("start!")
            A的錢 += 5
            輪流 = 1
        } else if (A == 1) {
            角色a位置.set(LedSpriteProperty.X, 1)
            角色a位置.set(LedSpriteProperty.Y, 0)
            basic.showLeds(`
                . # # # .
                # . . . #
                # . # . #
                # . . . #
                . # # # .
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.showString("sun!")
            basic.showString("20 $!")
            basic.showString("buy?")
            basic.showNumber(3)
            basic.pause(1000)
            basic.showNumber(2)
            basic.pause(1000)
            basic.showNumber(1)
            basic.pause(1000)
            if (買 == 0) {
                basic.showString("OK!")
            } else if (買 == 1) {
                game.setScore(1)
                A的錢 += -20
                basic.showString("A:")
                basic.showNumber(A的錢)
            }
        } else if (A == 2) {
            角色a位置.set(LedSpriteProperty.X, 2)
            角色a位置.set(LedSpriteProperty.Y, 0)
        } else if (A == 3) {
            角色a位置.set(LedSpriteProperty.X, 3)
            角色a位置.set(LedSpriteProperty.Y, 0)
        } else if (A == 4) {
            角色a位置.set(LedSpriteProperty.X, 4)
            角色a位置.set(LedSpriteProperty.Y, 0)
        } else if (A == 5) {
            角色a位置.set(LedSpriteProperty.X, 4)
            角色a位置.set(LedSpriteProperty.Y, 1)
        } else if (A == 6) {
            角色a位置.set(LedSpriteProperty.X, 4)
            角色a位置.set(LedSpriteProperty.Y, 2)
        } else if (A == 7) {
            角色a位置.set(LedSpriteProperty.X, 4)
            角色a位置.set(LedSpriteProperty.Y, 3)
        } else if (A == 8) {
            角色a位置.set(LedSpriteProperty.X, 4)
            角色a位置.set(LedSpriteProperty.Y, 4)
        } else if (A == 9) {
            角色a位置.set(LedSpriteProperty.X, 3)
            角色a位置.set(LedSpriteProperty.Y, 4)
        } else if (A == 10) {
            角色a位置.set(LedSpriteProperty.X, 2)
            角色a位置.set(LedSpriteProperty.Y, 4)
        } else if (A == 11) {
            角色a位置.set(LedSpriteProperty.X, 1)
            角色a位置.set(LedSpriteProperty.Y, 4)
        } else if (A == 12) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 4)
        } else if (A == 13) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 3)
        } else if (A == 14) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 2)
        } else if (A == 15) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 1)
        }
    } else if (輪流 == 0) {
        B += randint(1, 6)
    }
})
input.onButtonPressed(Button.B, function () {
    買 = 1
})
let A的錢 = 0
let 角色a位置: game.LedSprite = null
let 買 = 0
let A = 0
let 輪流 = 0
basic.showString("Monopoly")
輪流 = 0
A = 0
let B = 0
買 = 0
角色a位置 = game.createSprite(0, 0)
let 角色b位置 = game.createSprite(0, 0)
A的錢 = 20
let B的錢 = 20
let 開始 = game.createSprite(0, 0)
let 太陽 = game.createSprite(1, 0)
let 水星 = game.createSprite(2, 0)
let 金星 = game.createSprite(3, 0)
let 地球 = game.createSprite(4, 0)
let 驚嘆號1 = game.createSprite(4, 1)
let 火星 = game.createSprite(4, 2)
let 小行星帶 = game.createSprite(4, 3)
let 木星 = game.createSprite(4, 4)
let 問號1 = game.createSprite(3, 4)
let 土星 = game.createSprite(2, 4)
let 驚嘆號2 = game.createSprite(1, 4)
let 天王星 = game.createSprite(0, 4)
let 海王星 = game.createSprite(0, 3)
let 問號2 = game.createSprite(0, 2)
let 古柏帶 = game.createSprite(0, 1)
basic.showString("You have 20 $!")
control.inBackground(function () {
	
})
