import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { YEAR } from '../constants.js'
import { format } from 'date-fns'
import fr from 'date-fns/locale/fr/index.js'
import _ from 'lodash'

export const PAGE_TYPE_DAY = 'day'

export const fillPage = (page) => {
    const date = new Date(YEAR, 0, page.number)
    const formatted_date = format(date, 'iii dd LLLL', { locale: fr }).split(' ').map(_.upperFirst).join(' ')

    drawTabs(formatted_date, page)
    doc.text('TODO', 50, 50)
}
