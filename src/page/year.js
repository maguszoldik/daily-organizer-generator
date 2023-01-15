import { doc } from '../doc.js'
import { colors, WIDTH, YEAR } from '../constants.js'

export const PAGE_TYPE_YEAR = 'year'
export const fillPage = (page) => {
    /**
     * Background
     */

    // tabs line width
    doc.setLineWidth(0.2)

    const tabs_y = 2.55
    const tabs_text_y = tabs_y + 7.9
    const tabs_height = 10.5
    const notes_x = 130
    const first_quarter_x = 77

    doc.setFillColor(colors['bg-gray-dark'])
    doc.rect(0, 0, WIDTH, 13, 'F')

    // selected tab
    doc.setFillColor(colors['bg-gray'])
    doc.rect(7, tabs_y, 63, tabs_height, 'F')
    doc.rect(7, tabs_y, 63, tabs_height, 'S')

    doc.setFillColor(colors.white)

    // Quarters
    const quarterPosition = (q) => first_quarter_x + (q - 1) * 12

    ;[1, 2, 3, 4].forEach((q) => {
        const x = quarterPosition(q) - 2
        doc.rect(x, tabs_y, 13, tabs_height, 'F')
        doc.rect(x, tabs_y, 13, tabs_height, 'S')
    })

    // Notes tab
    doc.rect(notes_x - 2, tabs_y, 21, tabs_height, 'F')
    doc.rect(notes_x - 2, tabs_y, 21, tabs_height, 'S')

    // tabs bottom line
    doc.setLineWidth(0.2)
    doc.line(0, 13.1, WIDTH, 13, 'S')

    /**
     * Text
     */

    doc.setFont('SketchyTimes', 'bold')
    doc.setFontSize(24)

    // selected tab
    doc.setTextColor(colors['text-on-gray-dark'])
    doc.text(`Calendrier ${YEAR}`, 10, tabs_text_y)
    // doc.text('Dim. 03 Décembre', 10, tabs_text_y)
    // doc.text('Lun. 28 Avril', 10, tabs_text_y)

    // other tabs
    doc.setTextColor(colors.black)
    ;[1, 2, 3, 4].forEach((q) => {
        const x = quarterPosition(q)
        doc.text(`T${q}`, x, tabs_text_y)
    })

    doc.text('Notes', notes_x, tabs_text_y)
}
