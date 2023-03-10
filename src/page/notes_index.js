import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { COLORS, NOTES_PER_INDEX } from '../constants.js'
import pager from '../pager.js'
import { PAGE_TYPE_NOTE } from './note.js'
import translation from '../translation.js'

export const PAGE_TYPE_NOTES_INDEX = 'notes_index'

const origin_x = 10
const origin_y = 20
const note_space_x = 47
const note_space_y = 6
const number_per_column = Math.max(Math.floor(NOTES_PER_INDEX / 3), 1)

export const fillPage = (page) => {
    drawTabs(translation.getFor('calendar_title'), page)

    doc.setFontSize(12)
    doc.setTextColor(COLORS['text-dark'])
    doc.setDrawColor(COLORS['bg-light'])
    pager.pages
        .filter(
            (p) =>
                p.type === PAGE_TYPE_NOTE &&
                p.number >= (page.number - 1) * NOTES_PER_INDEX + 1 &&
                p.number <= NOTES_PER_INDEX * page.number
        )
        .forEach((p, index) => {
            const x = origin_x + Math.floor(index / number_per_column) * note_space_x
            const y = origin_y + (index % number_per_column) * note_space_y
            doc.textWithLink(String(p.number).padStart(3, '0') + '.', x, y, pager.linkToPage(p))
            doc.line(x, y + 1, x + note_space_x - note_space_y, y + 1)
        })
}
