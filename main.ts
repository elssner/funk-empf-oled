input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    OLEDtext.textZeile(oled.eDisplayFormat.x16x8, oled.oled_text("1 warte"))
    OLEDtext.textZeile(oled.eDisplayFormat.x16x8, oled.oled_text("3    auf"))
    OLEDtext.textZeile(oled.eDisplayFormat.x16x8, oled.oled_text("5       Text"))
    OLEDtext.textZeile(oled.eDisplayFormat.x16x8, oled.oled_text("7 Zeile 7 89ABCDEFG"))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    OLEDtext.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    OLEDtext.textZeile(oled.eDisplayFormat.x16x8, receivedString)
})
function Kommentar () {
    oled.comment("elssner/funk-empf-oled")
    oled.comment("Erweiterungen laden:")
    oled.comment("radio")
    oled.comment("calliope-net/oled")
}
let OLEDtext: oled.oledclass = null
radio.setGroup(12)
radio.setTransmitPower(7)
OLEDtext = oled.new_oledclass(oled.oled_eADDR_OLED(oled.eADDR_OLED.OLED_16x8_x3C))
OLEDtext.set_oledarrays_8x8(oled.new_oledarrays_8x8())
