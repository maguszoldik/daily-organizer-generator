import { drawTabs } from './section/tabs.js'
import { colors, YEAR } from '../constants.js'
import pager from '../pager.js'
import { PAGE_TYPE_DAY } from './day.js'
import { format, getMonth, getWeekOfMonth } from 'date-fns'
import _ from 'lodash'
import fr from 'date-fns/locale/fr/index.js'
import { doc } from '../doc.js'
import { getDayBackground } from '../holidays.js'

export const PAGE_TYPE_YEAR = 'year'

const week_start_on = 1 // Monday start
const days_letters = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
export const fillPage = (page) => {
    drawTabs(`Calendrier ${YEAR}`, page)

    const months = pager.pages
        .filter((p) => p.type === PAGE_TYPE_DAY)
        .map(appendDateToDayPageData)
        .reduce(reduceDayPageDataToMonths, [])
        .map(fillMonthWeeks)

    const gap_x = 48
    const gap_y = 45
    months.forEach((month, idx) => drawMonth(10 + gap_x * (idx % 3), 20 + Math.floor(idx / 3) * gap_y)(month))
}

const appendDateToDayPageData = (p) => {
    return {
        ...p,
        date: new Date(YEAR, 0, p.number),
    }
}

const reduceDayPageDataToMonths = (months, p) => {
    const month_index = getMonth(p.date)
    if (!months[month_index]) {
        months[month_index] = {
            label: _.upperFirst(format(p.date, 'MMMM', { locale: fr })),
            weeks: [],
        }
    }
    const week = getWeekOfMonth(p.date, { weekStartsOn: week_start_on })
    if (!months[month_index].weeks[week]) {
        months[month_index].weeks[week] = {
            week,
            days: [],
        }
    }

    months[month_index].weeks[week].days.push(p)

    return months
}

const fillMonthWeeks = (month) => {
    // Note: weeks[0] is undefined due to getWeekOfMonth usage

    // prepend null in first week
    let to_fill = 7 - month.weeks[1].days.length
    for (let i = 0; i < to_fill; i++) {
        month.weeks[1].days.unshift(null)
    }

    // create the sixth week if no exist
    if (!month.weeks[6]) {
        month.weeks[6] = {
            week: 6,
            days: [],
        }
    }

    // append null in sixth week
    to_fill = 7 - month.weeks[6].days.length
    for (let i = 0; i < to_fill; i++) {
        month.weeks[6].days.push(null)
    }

    return month
}

const drawMonth = (x, y) => (month) => {
    const gap = 5.5

    // label
    doc.setFontSize(14)
    doc.text(month.label, x, y)

    // days letters
    doc.setFontSize(10)
    days_letters.forEach((letter, idx) => {
        doc.text(letter, x + 1.5 + idx * gap, y + gap)
    })

    // days
    month.weeks.forEach((week, week_index) => {
        week.days.forEach((day, day_index) => {
            if (day !== null) {
                const day_x = x + 1 + day_index * gap
                const day_y = y + (week_index + 1) * gap
                doc.setFillColor(getDayBackground(day.date))
                doc.rect(day_x - 1.25, day_y - 3.75, 5.5, 5.5, 'F')

                doc.textWithLink(format(day.date, 'dd'), day_x, day_y, pager.linkToPage(day))
            }
        })
    })

    // line under letters
    const line_y = y + 7.25
    doc.setDrawColor(colors['bg-gray'])
    doc.line(x - 0.25, line_y, x + 38.25, line_y)
}
