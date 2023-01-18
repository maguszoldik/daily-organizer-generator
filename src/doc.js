import { jsPDF } from 'jspdf'
import { COLORS, HEIGHT, WIDTH, YEAR } from './constants.js'
import { addSketchyTimesFontToDoc } from './font/SketchyTimes-normal.js'
import { addSketchyTimesBoldFontToDoc } from './font/SketchyTimes-bold.js'
import translation from './translation.js'

export const doc = new jsPDF({
    unit: 'mm',
    format: [WIDTH, HEIGHT],
    floatPrecision: 2,
    putOnlyUsedFonts: true,
})

doc.setProperties({
    title: translation.getFor('doc_title'),
    subject: translation.getFor('doc_subject'),
    author: 'Nicolas PENCRÉACH',
    keywords: translation.getFor('doc_keywords'),
    creator: 'Nicolas PENCRÉACH',
})

// include fonts
addSketchyTimesFontToDoc(doc)
addSketchyTimesBoldFontToDoc(doc)

// =====
// Cover
// =====

// background
doc.setFillColor(COLORS['bg-darker'])
doc.rect(0, 0, WIDTH, HEIGHT, 'F')

// text on cover
const font_size = 96
const line_height = 30
let y = 0
doc.setFont('SketchyTimes', 'bold')
doc.setFontSize(font_size)
doc.setTextColor(COLORS['text-lighter'])
doc.text(translation.getFor('cover_line1'), 32, (y += 60))
doc.text(translation.getFor('cover_line2'), 32, (y += line_height))
doc.text(`${YEAR}`, 50, (y += 1.5 * line_height))
