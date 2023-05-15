let counter = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    counter += 1
    basic.showNumber(counter)
})
