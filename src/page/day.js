import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'

export const PAGE_TYPE_DAY = 'day'

export const fillPage = (page) => {
    drawTabs(`Jour ${page.number}`, page)
    doc.text('TODO', 50, 50)
}
