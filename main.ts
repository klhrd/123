joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    yn = 1
})
/**
 * 地產總管理的第幾位數=0---無人買--------$=0
 * 
 * 地產總管理的第幾位數=1---A買房子=0---$/3X1
 * 
 * 地產總管理的第幾位數=2---B買房子=0---$/3X1
 * 
 * 地產總管理的第幾位數=3---A買房子=1---$/3X2
 * 
 * 地產總管理的第幾位數=4---B買房子=1---$/3X2
 * 
 * 地產總管理的第幾位數=5---A買房子=2---$/3X3
 * 
 * 地產總管理的第幾位數=6---B買房子=2---$/3X3
 * 
 * 地產總管理的第幾位數=7---A買旅館=1---$/3X4
 * 
 * 地產總管理的第幾位數=8---B買旅館=1---$/3X4
 */
input.onGesture(Gesture.Shake, function () {
    if (輪流 == 0) {
        A += randint(1, 6)
        if (A >= 16) {
            A += -16
        }
        if (A == 0) {
            角色a位置.set(LedSpriteProperty.X, 0)
            角色a位置.set(LedSpriteProperty.Y, 0)
            basic.showString("" + images.createImage(`
                . # # # #
                . # # # #
                . # # # #
                . # . . .
                . # . . .
                `) + "Go!" + "+5$")
            A的錢 += 5
            輪流 = 1
            basic.clearScreen()
        } else if (A == 1) {
            角色a位置.set(LedSpriteProperty.X, 1)
            角色a位置.set(LedSpriteProperty.Y, 0)
            if (地產總管理的第幾位數(11) == 0) {
                basic.showString("" + images.createImage(`
                    . # # # .
                    # . . . #
                    # . # . #
                    # . . . #
                    . # # # .
                    `) + "Sun!" + "Buy?")
                basic.pause(500)
                if (yn == 0) {
                    basic.showString("OK!")
                } else if (yn == 1) {
                    A的錢 += -21
                    basic.showString("A'$" + A的錢)
                    地產總管理 += 10000000000
                }
                basic.clearScreen()
            }
        } else if (A == 2) {
            角色a位置.set(LedSpriteProperty.X, 2)
            角色a位置.set(LedSpriteProperty.Y, 0)
            basic.showString("" + images.createImage(`
                . # . # .
                # . # . #
                . # # # .
                . . # . .
                . . # . .
                `) + "Mercury!" + "Buy?")
            basic.pause(500)
            if (yn == 0) {
                basic.showString("OK!")
            } else if (yn == 1) {
                A的錢 += -6
                basic.showString("A'$" + A的錢)
                地產總管理 += 1000000000
            }
            basic.clearScreen()
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
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    yn = 0
})
function 地產總管理的第幾位數 (幾: number) {
    地產總管理的第幾位數2 = 1
    for (let index = 0; index < 幾; index++) {
        地產總管理的第幾位數2 = 地產總管理的第幾位數2 * 10
    }
    地產總管理的第幾位數2 = (地產總管理 - 地產總管理 % 地產總管理的第幾位數2) % (地產總管理的第幾位數2 * 10)
    return 地產總管理的第幾位數2
}
let 地產總管理的第幾位數2 = 0
let A的錢 = 0
let 角色a位置: game.LedSprite = null
let yn = 0
let A = 0
let 地產總管理 = 0
let 輪流 = 0
joystickbit.initJoystickBit()
輪流 = 0
地產總管理 = 0
A = 0
let B = 0
yn = 0
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
