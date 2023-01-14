import { jsPDF } from 'jspdf'
import { HEIGHT, WIDTH, YEAR } from './constants.js'
import { addSketchyTimesFontToDoc } from './font/SketchyTimes-normal.js'
import { addSketchyTimesBoldFontToDoc } from './font/SketchyTimes-bold.js'

export const doc = new jsPDF({
    unit: 'mm',
    format: [WIDTH, HEIGHT],
    floatPrecision: 2,
    putOnlyUsedFonts: true,
})

// include fonts
addSketchyTimesFontToDoc(doc)
addSketchyTimesBoldFontToDoc(doc)

// =====
// Cover
// =====

// background
doc.setFillColor(80)
doc.rect(0, 0, WIDTH, HEIGHT, 'F')

// text on cover
doc.setFont('SketchyTimes', 'bold')
const font_size = 96
const line_height = 30
doc.setFontSize(font_size)
doc.setTextColor(240)
let y = 0
doc.text('Agenda', 32, (y += 60))
doc.text('&Notes', 32, (y += line_height))
doc.text(`${YEAR}`, 50, (y += 1.5 * line_height))
