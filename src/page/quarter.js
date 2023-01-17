import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { COLORS, YEAR } from '../constants.js'
import pager from '../pager.js'
import { PAGE_TYPE_DAY } from './day.js'
import { getMonth, getQuarter, isLastDayOfMonth } from 'date-fns'
import { getDayBackground } from '../holidays.js'
import translation from '../translation.js'

export const PAGE_TYPE_QUARTER = 'quarter'

export const fillPage = (page) => {
    drawTabs(translation.getFor('calendar_title'), page)

    const months = pager.pages
        .filter((p) => p.type === PAGE_TYPE_DAY)
        .map(appendDateToDayPageData)
        .filter((p) => getQuarter(p.date) === page.number)
        .reduce(reducePageDataToMonthsForPageQuarter(page), [])

    months.forEach(drawMonth)
}

const appendDateToDayPageData = (p) => {
    return {
        ...p,
        date: new Date(YEAR, 0, p.number),
    }
}

const reducePageDataToMonthsForPageQuarter = (page) => (months, p) => {
    const month_index = getMonth(p.date) - 3 * (page.number - 1)
    if (!months[month_index]) {
        months[month_index] = {
            label: translation.getMonthLabel(p.date),
            days: [],
        }
    }

    months[month_index].days.push(p)

    return months
}

const drawMonth = (month, index) => {
    const month_x = 10 + index * 47
    const month_y = 22
    doc.setFontSize(22)
    doc.setTextColor(COLORS.black)
    doc.text(month.label, month_x, month_y)

    month.days.forEach(drawDay(month_x, month_y))
}

const drawDay = (month_x, month_y) => (page_day, index) => {
    const day_y = month_y + 8 + index * 5.5

    // background
    doc.setFillColor(getDayBackground(page_day.date))
    doc.rect(month_x - 1, day_y - 4, 44, 5.4, 'F')

    // upper line
    doc.setDrawColor(COLORS['bg-light'])
    doc.line(month_x - 1, day_y - 4, month_x + 43, day_y - 4)

    // bottom line on last day
    if (isLastDayOfMonth(page_day.date)) {
        doc.line(month_x - 1, day_y + 1.5, month_x + 43, day_y + 1.5)
    }

    // link
    doc.setFontSize(14)
    doc.textWithLink(translation.getDayShort(page_day.date), month_x, day_y, pager.linkToPage(page_day))
}
