import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { YEAR } from '../constants.js'

export const PAGE_TYPE_QUARTER = 'quarter'

export const fillPage = (page) => {
    drawTabs(`Calendrier ${YEAR}`, page)
    doc.text('TODO', 50, 50)
}
