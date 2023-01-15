import { drawTabs } from './section/tabs.js'
import { YEAR } from '../constants.js'

export const PAGE_TYPE_YEAR = 'year'
export const fillPage = (page) => {
    drawTabs(`Calendrier ${YEAR}`, page)
}
