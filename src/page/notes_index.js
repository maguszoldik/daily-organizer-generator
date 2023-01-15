import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { colors, YEAR } from '../constants.js'
import pager from '../pager.js'
import { PAGE_TYPE_NOTE } from './note.js'

export const PAGE_TYPE_NOTES_INDEX = 'notes_index'

const origin_x = 10
const origin_y = 20
const note_space_x = 50
const note_space_y = 6
const number_per_column = 30
const number_of_column = 3
const number_per_page = number_of_column * number_per_column

export const fillPage = (page) => {
    drawTabs(`Calendrier ${YEAR}`, page)

    doc.setFontSize(12)
    doc.setTextColor(colors['text-gray-dark'])
    doc.setDrawColor(colors['bg-gray-light'])
    pager.pages
        .filter(
            (p) =>
                p.type === PAGE_TYPE_NOTE &&
                p.number >= (page.number - 1) * number_per_page + 1 &&
                p.number <= number_per_page * page.number
        )
        .forEach((p, index) => {
            const x = origin_x + Math.floor(index / number_per_column) * note_space_x
            const y = origin_y + (index % number_per_column) * note_space_y
            doc.textWithLink(String(p.number).padStart(3, '0') + '.', x, y, pager.linkToPage(p))
            doc.line(x, y + 1, x + note_space_x - note_space_y, y + 1)
        })
}
