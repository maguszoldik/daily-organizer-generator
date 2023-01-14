import { jsPDF } from 'jspdf'
import { HEIGHT, WIDTH } from './constants.js'

export const doc = new jsPDF({
    unit: 'mm',
    format: [WIDTH, HEIGHT],
    floatPrecision: 2,
    putOnlyUsedFonts: true,
})

// Cover
doc.text('Organiser pour 2023', 23, 87)
