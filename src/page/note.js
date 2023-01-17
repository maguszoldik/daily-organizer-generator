import { doc } from '../doc.js'
import { COLORS, WIDTH } from '../constants.js'
import { drawTabs } from './section/tabs.js'

export const PAGE_TYPE_NOTE = 'note'

export const fillPage = (page) => {
    drawTabs(String(page.number).padStart(3, '0') + '.', page)

    doc.setDrawColor(COLORS['bg-dark'])
    for (let i = 0; i < 25; i++) {
        const y = 23 + i * 7
        doc.line(10, y, WIDTH - 10, y, 'S')
    }
}
